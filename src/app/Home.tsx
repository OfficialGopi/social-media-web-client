import { useEffect } from "react";
import AppLayout from "../components/layouts/AppLayout";
import { useOpenAside } from "../hooks/dispatchHook";

const Home = () => {
  const openAside = useOpenAside();
  useEffect(() => {
    openAside();
  }, []);

  return <div>Home</div>;
};

export default AppLayout()(Home);
