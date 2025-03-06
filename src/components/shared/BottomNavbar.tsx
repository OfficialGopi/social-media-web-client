import { useNavigate } from "react-router-dom";
import { useNavigationLinks } from "../../constants/NavigationLinks.constants";

const BottomNavbar = () => {
  const navigationLinks = useNavigationLinks();
  const navigate = useNavigate();
  return (
    <div className="w-full bg-black flex  items-center justify-around">
      {navigationLinks.map((link, index) => (
        <button
          key={index}
          className="w-[40px] h-[40px] relative hover:cursor-pointer group flex items-center justify-start "
          onClick={() => {
            if (link.href) navigate(link.href);
            else {
            }
          }}
        >
          <div className="absolute group-hover:flex hidden gorup-hover: translate-y-[-40px] ">
            {link.name}
          </div>
          <div
            className={`w-full h-full group-active:scale-90 group-active:bg-neutral-950  duration-300 group-hover:border-neutral-500 border-black border  rounded-lg  flex items-center justify-center ${
              link.href &&
              location.pathname.startsWith(link.href!) &&
              "bg-neutral-900"
            }`}
          >
            <link.Icon />
          </div>
        </button>
      ))}
    </div>
  );
};

export default BottomNavbar;
