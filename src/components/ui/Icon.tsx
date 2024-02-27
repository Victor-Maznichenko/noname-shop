interface IconProps {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

const Icon = ({ name, width, height, className }: IconProps) => (
  <svg className={className ?? ""} style={{ width, height }}>
    <use xlinkHref={`sprite.svg#icon-${name}`} />
  </svg>
);

export default Icon;
