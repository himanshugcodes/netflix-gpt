const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-full aspect-video pt-[25%] md:pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl lg:text-6xl font-bold">{title}</h1>
      <p className="my-4 leading-5 w-[480px] hidden md:block">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-2  px-3 md:px-8  text-xs lg:text-lg  rounded hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white py-1 md:py-2  px-3 md:px-8  text-xs lg:text-lg bg-opacity-50 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
