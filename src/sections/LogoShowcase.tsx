import { logoIconsList } from "../constants";

interface Icon {
  imgPath: string;
}

const LogoIcon = ({ icon }: { icon: Icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
