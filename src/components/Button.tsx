type ButtonProps = {
  text?: string;
  icon?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

export function Button({ text, icon, style, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        ...style,
      }}
    >
      <p>{text}</p>
      <img src={icon} alt="" />
    </button>
  );
}
