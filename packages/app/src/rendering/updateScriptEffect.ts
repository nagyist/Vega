import { ScriptAsset, ScriptEffect, Strip } from "@vega/core";
import { uuid } from "short-uuid";

import { EffectPlugin } from "@/interfaces/plugins/CustomEffect";
import { SceneState } from "@/store/scene";

enum Status {
  LOADING,
  LOADED,
  ERROR,
}

export const userScriptMap = new Map<string, EffectPlugin>();
const scriptStatusMap = new Map<string, Status>();

export function loadScript(scriptAsset: ScriptAsset) {
  scriptStatusMap.set(scriptAsset.id, Status.LOADING);
  const srcPath = scriptAsset.path + "/dist/esm/index.js";
  const userScriptElement = document.createElement("script");
  userScriptElement.type = "module";
  userScriptElement.onerror = () => {
    scriptStatusMap.set(scriptAsset.id, Status.ERROR);
  };
  userScriptElement.onload = () => {
    const tmpEventId = uuid().replace(/-/g, "");

    // Load the ESM module through another temporary script and inject it into the runtime via window.
    const esmBridgeElement = document.createElement("script");
    esmBridgeElement.type = "module";
    esmBridgeElement.innerHTML = `
import _${tmpEventId} from "${srcPath}";
window.dispatchEvent(new CustomEvent("${tmpEventId}", { detail: _${tmpEventId} }));
`;

    const handlePluginLoaded = (event: Event) => {
      if (event.type !== tmpEventId) return;
      if (!(event instanceof CustomEvent)) return;
      fetch(scriptAsset.path + "/package.json")
        .then((res) => res.json())
        .then((json) => {
          const userScript = event.detail;
          userScriptMap.set(scriptAsset.id, {
            ...userScript,
            pkg: json,
          });
          scriptStatusMap.set(scriptAsset.id, Status.LOADED);
          esmBridgeElement.remove();
          userScriptElement.remove();
          window.removeEventListener(tmpEventId, handlePluginLoaded);
        });
    };
    window.addEventListener(tmpEventId, handlePluginLoaded);

    document.body.appendChild(esmBridgeElement);
  };
  userScriptElement.src = srcPath;
  document.head.appendChild(userScriptElement);
}
export const handler = (
  ctx: CanvasRenderingContext2D,
  effect: ScriptEffect,
  strip: Strip,
  scene: SceneState,
  appCtx: {
    dispatch: (action: any) => void;
    actions: any;
  }
) => {
  const scriptAsset = scene.assets.find(
    (asset) => asset.id === effect.scriptAssetId
  );
  if (!scriptAsset) return;
  const status = scriptStatusMap.get(effect.scriptAssetId);
  if (status === Status.ERROR || status === Status.LOADING) return;
  if (!status) {
    loadScript(scriptAsset as ScriptAsset);
  }
  const userScript = userScriptMap.get(effect.scriptAssetId);
  if (!userScript) return;
  return {
    update: () => userScript.update?.(ctx, effect, strip, scene, appCtx),
    beforeUpdate: () =>
      userScript.beforeRender?.(ctx, effect, strip, scene, appCtx),
  };
};
