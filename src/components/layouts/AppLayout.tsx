import Aside from "../shared/Aside";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { useDialogSelector } from "../../hooks/selectorHook";
import { JSX, PropsWithChildren } from "react";

const AppLayout =
  () => (WrappedComponent: (props: PropsWithChildren<{}>) => JSX.Element) => {
    return (props: PropsWithChildren) => {
      const { isAsideOpen } = useDialogSelector();
      return (
        <>
          <main className="w-screen flex flex-col md:flex-row   h-screen">
            <Header />
            <Aside />
            <section
              className={`flex w-full h-[calc(100%-108px)]  md:w-[calc(100%-73px)] overflow-y-scroll md:h-full ${
                isAsideOpen
                  ? "md:w-[calc(100%-73px)] lg:w-[calc(100%-245px)] xl:w-[calc(100%-336px)] "
                  : ""
              }`}
            >
              <WrappedComponent {...props} />
              <Footer />
            </section>
          </main>
        </>
      );
    };
  };

export default AppLayout;
