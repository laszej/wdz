import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 sekundy
    fade: true,
    arrows: false,
  };

  const photos = [
    { path: "/carousel/1.jpg" },
    { path: "/carousel/2.jpg" },
    { path: "/carousel/3.jpg" },
    { path: "/carousel/4.jpg" },
    { path: "/carousel/5.jpg" },
    { path: "/carousel/6.jpg" },
    { path: "/carousel/7.jpg" },
    { path: "/carousel/8.jpg" },
  ];

  return (
    <Slider {...settings}>
      {photos.map((photo) => (
        <div key={photo.path}>
          <div
            className="galleryPhoto"
            style={{ position: "relative", width: "100%", height: "400px" }}
          >
            <Image
              src={photo.path}
              alt="carousel image"
              layout="fill"
              objectFit="cover"
              priority // szybkie ładowanie pierwszego obrazka
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Gallery;
