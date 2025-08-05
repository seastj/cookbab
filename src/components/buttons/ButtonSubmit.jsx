import "../buttons/submitbutton.css";

function ButtonSubmit({
  type = "button",
  label,
  onClick,
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`submit_button ${className}`}
    >
      {label}
    </button>
  );
}

export default ButtonSubmit;
