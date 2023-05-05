import { KeyFrame } from "./KeyFrame";

export type TextEffect = {
  id: string;
  type: "text";
  text: string;
  x: number;
  y: number;
  fontAssetId: string;
  fontSize: number;
  fontStyle?: string;
  color?: string;
  shadowColor?: string;
  shadowBlur?: number;
  outlineColor?: string;
  outlineWidth?: number;
  characterSpacing?: number;
  keyframes: KeyFrame[];
};
