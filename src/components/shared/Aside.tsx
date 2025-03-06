import { useAsideSelector } from "../../hooks/selectorHook";
import { useNavigationLinks } from "../../constants/NavigationLinks.constants";
import { useNavigate } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";

const Aside = () => {
  const { isOpen } = useAsideSelector();
  const navigationLinks = useNavigationLinks();
  const navigate = useNavigate();
  return (
    <div className="w-full  h-full flex flex-col items-start justify-between overflow-hidden">
      <div className="flex flex-col gap-2">
        <div className="logo mb-20">Logo</div>
        {navigationLinks.map((link, index) => (
          <button
            key={index}
            className="w-full hover:cursor-pointer group flex items-center justify-start overflow-hidden"
            onClick={() => {
              if (link.href) navigate(link.href);
              else {
              }
            }}
          >
            <div className="w-[72px]  flex items-center justify-center">
              <div
                className={`w-[48px] group-active:scale-90 group-active:bg-neutral-950  duration-300 group-hover:border-neutral-500 border-black border  rounded-lg h-[48px] flex items-center justify-center ${
                  link.href &&
                  location.pathname.startsWith(link.href!) &&
                  "bg-neutral-900"
                }`}
              >
                <link.Icon />
              </div>
            </div>

            <div className={` ${isOpen && "lg:w-auto"} w-0 overflow-hidden `}>
              {link.name}
            </div>
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <button className="w-full hover:cursor-pointer group flex items-center justify-start overflow-hidden">
          <div className="w-[72px]  flex items-center justify-center">
            <div
              className={`w-[48px] group-active:scale-90 group-active:bg-neutral-950  duration-300 group-hover:border-neutral-500 border-black border  rounded-lg h-[48px] flex items-center justify-center `}
            >
              <MoreHorizontal />
            </div>
          </div>
          {isOpen && (
            <div className={` lg:w-auto w-0 overflow-hidden `}>More</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Aside;
