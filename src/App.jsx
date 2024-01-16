import { useEffect, useState } from "react";

const imgs = [
  "https://cdn.wallpapersafari.com/31/77/634LSi.jpg",
  "https://wallpaperaccess.com/full/229840.jpg",
  "https://i.pinimg.com/originals/7c/cd/c6/7ccdc64fc71df1a4b60ce17f4eeb694a.jpg",
  "https://wallpaperaccess.com/full/229840.jpg",
  "https://thesmartlocal.com/korea/wp-content/uploads/2021/02/Korean-Wedding-Photoshoot-22.jpg",
];

function App() {
  return (
    <div>
      <Hero>
        <div className="flex justify-center flex-col align-bottom text-center">
          <p className="text-2xl font-light"> The Wedding of</p>
          <p className="text-4xl">Romeo & Juliet</p>
          <br />
          <p className="text-[18px] font-normal">
            Kepada Yth. <br /> Bapak/Ibu Saudara/i{" "}
          </p>
          <br />
          <button className=" px-2 py-1 mt-10 transition-all duration-300 shadow-lg hover:shadow-gray-100/50 border-4 border-white text-white rounded-lg text-[14px] cursor-pointer active:scale-[.97]">
            Buka Undangan
          </button>
        </div>
      </Hero>
      <Wrapper>
        <div className="w-[500px] h-[10vh] bg-gray-400 "></div>
      </Wrapper>
      <Hero>
        <div className="flex justify-center flex-col align-bottom text-center">
          We Present You <br />
          <br />
          <p className="text-xl">Romeo & Juliet</p>
          <br />
          <button className=" px-2 py-1 mt-10 transition-all duration-300 shadow-lg hover:shadow-gray-100/50 border-4 border-white text-white rounded-lg text-[14px] cursor-pointer active:scale-[.97]">
            Undangan Anda
          </button>
        </div>
      </Hero>
    </div>
  );
}

function Wrapper({ children }) {
  return <div className="flex justify-center">{children}</div>;
}

function Hero({ children }) {
  const [imgId, setImgId] = useState(0);

  useEffect(() => {
    const setId = setInterval(() => {
      setImgId((t) => (t + 1) % imgs.length);
      console.log(imgId);
    }, 2000);

    return () => {
      clearInterval(setId);
    };
  }, [imgId]);

  return (
    <div className="block">
      <div className=" flex justify-center">
        {imgs.map((img, i) => (
          <img
            className={`absolute z-0 w-[500px] h-screen object-cover duration-1000 transition-all scale-x-${
              imgId === i ? "50" : "100"
            } ${imgId === i ? "opacity-100" : "opacity-0"}`}
            src={img}
            key={i}
          />
        ))}
        <div className="absolute w-[500px] h-screen opacity-40 bg-black z-1"></div>
      </div>

      <div className="relative flex justify-center items-center text-white text-3xl font-bold h-screen  z-10 ">
        <div className="">{children}</div>
      </div>
    </div>
  );
}

export default App;
