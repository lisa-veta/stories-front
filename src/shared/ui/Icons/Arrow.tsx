export const Arrow = ({
  width = 24,
  height = 24,
  color = 'currentColor',
  rotate = 0,
  ...restProps
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${rotate}deg)` }}
    {...restProps}
  >
    <path
      d="M16 14L12 10L8 14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>

);
