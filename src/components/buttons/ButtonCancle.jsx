import "../buttons/canclebutton.css";

function ButtonCancle({
  type = "button",
  label,
  onClick,
  className,
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`cancle_button ${className}`}
    >
      {label}
    </button>
  );
}

export default ButtonCancle;
