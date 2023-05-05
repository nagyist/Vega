import { iconProps, ToolTip, TransparentIconButton } from "@vega/riapp-ui";
import { FC } from "react";
import { Key } from "tabler-icons-react";

export const KeyframeButton: FC<{
  onClick: () => void;
  highlight: boolean;
  active: boolean;
}> = (props) => {
  return (
    <TransparentIconButton>
      <Key
        {...iconProps}
        onClick={props.onClick}
        color={
          props.highlight
            ? "var(--color-strip-selected)"
            : props.active
            ? "var(--color-primary)"
            : "white"
        }
      />
      <ToolTip>Add keyframe</ToolTip>
    </TransparentIconButton>
  );
};
