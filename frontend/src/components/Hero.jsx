import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Hero() {
  const slides = [
    {
      url: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    },
    {
      url: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    },
    {
      url: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    },
    {
      url: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    },
    {
      url: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-[88vh] m-auto px-4 py-6 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-no-repeat bg-cover bg-center transition-all duration-300"
      >
        {/* Left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronRight onClick={nextSlide} size={30} />
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center top-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer ${
              currentIndex === index ? "bg-gray-700" : "bg-gray-400"
            } w-2 h-2 rounded-full my-1 mx-2 hover:bg-gray-600 transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
