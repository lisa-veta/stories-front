export const getElementStyles = (el) => {
  const styles = el.style || {};
  const fontStyles = styles.fontStyles || [];
  return {
    color: styles.textColor,
    background: styles.backgroundColor,
    borderRadius: styles.borderRadius
      ? `${styles.borderRadius}px`
      : '10px',
    fontSize: styles.fontSize ? `${styles.fontSize}px` : '16px',
    fontWeight: fontStyles.includes('bold') ? 'bold' : 'normal',
    fontStyle: fontStyles.includes('italic') ? 'italic' : 'normal',
    textDecoration: fontStyles.includes('underline') ? 'underline' : 'none',
  };
};
