const FloatingBox = ({ children, left, top, x = 0, y = 0 }) => {
  return (
    <div
      className={`absolute rounded-full bg-white px-10 py-2 shadow-xl ring-[6px] ring-white/50`}
    >
      <p className="font-semibold">{children}</p>
    </div>
  );
};

export default FloatingBox;
