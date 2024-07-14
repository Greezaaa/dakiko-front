type IconButtonProps = {
  text: string;
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  className: string;
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
};
const IconButton = ({
  text,
  imgSrc,
  imgAlt = "",
  imgWidth,
  className,
  selected,
  disabled,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btnImg ${className} ${selected ? "active" : ""}`}
      title={text}
    >
      <img src={imgSrc} alt={imgAlt} width={imgWidth} />
    </button>
  );
};

export default IconButton;
