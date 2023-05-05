import { CSSProperties, FC } from "react";

export const MakeSVG: FC<{
  f: (x: number) => number;
  style?: CSSProperties;
  width?: number;
  height?: number;
  hideBorder?: boolean;
  lineColor?: string;
  circleColor?: string;
}> = (props) => {
  const points = [];
  const padding = 4;
  const width = props.width ?? 16;
  const height = props.height ?? 12;
  const step = 100;
  for (let i = 0; i < step; i++) {
    const x = i / step;
    const y = props.f(x);
    points.push(`${padding + x * width} ${padding + (1 - y) * height}`);
  }
  const d = `M ${points.join(" ")}`;
  return (
    <svg
      style={props.style}
      width={width}
      height={height}
      viewBox={`0 0 ${width + padding * 2} ${height + padding * 2}`}
      preserveAspectRatio="none"
      strokeWidth={2}
    >
      <rect
        x={0}
        y={0}
        width={width + padding * 2}
        height={height + padding * 2}
        fill="none"
        stroke={"var(--color-border)"}
        style={{
          display: props.hideBorder ? "none" : "block",
        }}
      />
      <path
        d={d}
        stroke={props.lineColor ?? "var(--color-primary)"}
        fill="none"
      />
      <circle
        cx={padding}
        cy={padding + height}
        r="2"
        fill={props.circleColor ?? "var(--color-text-strip-border)"}
      />
      <circle
        cx={padding + width}
        cy={padding}
        r="2"
        fill={props.circleColor ?? "var(--color-text-strip-border)"}
      />
    </svg>
  );
};
