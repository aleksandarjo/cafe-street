const Button = ({ children, className, onClick, href, px, icon, wnh }) => {
  const classes = `text-sm rounded-full flex items-center font-medium py-4 ${icon ? "gap-4" : ""} ${px || "px-10"} ${className || ""}`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {children}
      {icon && (
        <span
          className={`flex ${wnh ? `h-${wnh} w-${wnh}` : "h-8 w-8"} bg-primary items-center  justify-center rounded-full text-xl`}
        >
          {icon}
        </span>
      )}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      {children}
      {icon && <span>{icon}</span>}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
