import { Effect } from "@vega/core";

export function hasKeyFrame<T extends Effect>(
  effect: T,
  key: keyof T
) {
  if (!effect.keyframes) return false;
  return effect.keyframes.some((k) => k.property === key);
}
