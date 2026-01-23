export const Arrow = ({
  width = 24,
  height = 24,
  color = 'currentColor',
  ...restProps
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
