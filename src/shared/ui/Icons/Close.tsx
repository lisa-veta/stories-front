export const Close = ({
  width = 24,
  height = 24,
  color = 'currentColor',
  ...restProps
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
    <path d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

);
