import { svgIcons, reactIcons } from "./svg";

type SvgType = keyof typeof svgIcons;
type ReactIconType = keyof typeof reactIcons;
export type IconType = SvgType | ReactIconType;

export interface IconProps {
  name: IconType;
  size?: number;
  color?: string;
}

export const Icon = (props: IconProps) => {
  const { name, color, size } = props;

  const TargetComponent = svgIcons[name];
  return <TargetComponent />;
};
