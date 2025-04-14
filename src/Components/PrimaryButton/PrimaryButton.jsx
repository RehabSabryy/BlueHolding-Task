
export default function PrimaryButton({ text, icon, onClick, className = '' , disabled}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer primary-btn-shadow bg-white rounded  text-[#0096D7] text-[28px] flex items-center gap-2 px-7 py-2 hover:bg-[#F3F3F3] transition duration-300 ${className}`}
    >
      {icon && <img src={icon} alt="" />}
      {text}
    </button>
  );
}
