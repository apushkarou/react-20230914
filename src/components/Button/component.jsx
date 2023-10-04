export const Button = ({ className, title, onClick, disabled }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};
