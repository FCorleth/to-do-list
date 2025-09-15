type ButtonProps = {
  text?: string;
  icon?: string;
  style?: React.CSSProperties;
};

export function Button({ text, icon, style }: ButtonProps) {
  return (
    <button
      style={{
        ...style,
      }}
    >
      <p>{text}</p>
      <img src={icon} alt="" />
    </button>
  );
}
