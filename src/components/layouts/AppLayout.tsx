import { JSX, PropsWithChildren } from "react";
import Aside from "../shared/Aside";
import { useAsideSelector } from "../../hooks/selectorHook";
import BottomNavbar from "../shared/BottomNavbar";

const AppLayout =
  () => (WrappedComponent: (props: PropsWithChildren<any>) => JSX.Element) => {
    return (props: PropsWithChildren) => {
      const { isOpen } = useAsideSelector();
      return (
        <>
          <main className="w-screen flex sm:flex-row overflow-x-hidden">
            <aside
              className={`w-0 z-0 sticky top-0 left-0 hidden sm:flex sm:flex-col  sm:w-[72px]  border ${
                isOpen && "lg:w-[240px]"
              } transition-width duration-500`}
            >
              <Aside />
            </aside>
            <section className="flex-1 h-screen border mb-[48px] sm:mt-0 sm:mb-0 overflow-hidden">
              <WrappedComponent {...props} />
            </section>
            <nav className="fixed bottom-0 left-0 h-[48px] flex sm:hidden border w-full">
              <BottomNavbar />
            </nav>
          </main>
        </>
      );
    };
  };

export default AppLayout;
