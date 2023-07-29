import { reactIcons, emojiIcons, svgIcons } from "./svg";

type SvgType = keyof typeof svgIcons;
type EmojiIconType = keyof typeof emojiIcons;
export type IconType = SvgType | EmojiIconType;

export interface IconProps {
  className?: string
  name: IconType;
  size?: number;
  color?: string;
}

export const Icon = (props: IconProps) => {
  const { className, name, color, size } = props;

  const TargetComponent = reactIcons[name];
  return <TargetComponent className={className} />;
};

export default Icon;
