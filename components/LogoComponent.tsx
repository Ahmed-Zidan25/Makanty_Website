
const LogoGrid = ({logos}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`${logo.customSize || "h-10 w-32"} md:h-12 md:w-40 opacity-70 hover:opacity-100 transition-opacity`}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-full w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;