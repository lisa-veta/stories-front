export const Plus = ({
  width = 24,
  height = 24,
  color = 'currentColor',
  ...restProps
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      d="M6 12H12M12 12H18M12 12V18M12 12V6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

);

