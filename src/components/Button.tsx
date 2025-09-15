type ButtonProps = {
  text?: string;
  icon?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({ text, icon, style, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...style,
      }}
    >
      <p>{text}</p>
      <img src={icon} alt="" />
    </button>
  );
}
