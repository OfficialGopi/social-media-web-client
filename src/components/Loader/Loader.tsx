import LoaderWebM from "./../../assets/Loader/GoogleCityLoader.webm";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <video autoPlay={true} loop={true} src={LoaderWebM} />
    </div>
  );
};

export default Loader;
