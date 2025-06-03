import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Gallery1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 second intervals
    fade: true
  };

  const photos = [
    {
      path: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/470210435_122159286404295673_3131239847486328570_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=P0KFMnyKP4oQ7kNvwFMd-vF&_nc_oc=AdlB8nuWW_9J6ONYvy-_mCqD-4oDdGVQzOMlRGRDM3RKaVswlg-6fC7zlzEOqdhGupI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=3RdiGiaUsLpK6-608hbslA&oh=00_AfJdKUIwXLVtRyCk24jBrY7UgbS0izlyXFt9ugtV-rOqHA&oe=6845047F",
    },
    { path: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/473098777_122162142908291253_8253620796820843789_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zPwpI6LXQJ8Q7kNvwHMBMhZ&_nc_oc=Adn_FvsIRuvht0DAmkoYRqdtp_uCTWHTq2qFl2fuMrjW0h7jJZPhKdO3Xa2pVqK7iHo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=CSGItsiF-pdl37G02xgHww&oh=00_AfLQXjP6I7U2vzKX54vCQm06uBCwM9zvlIpgPdD5p3fUtQ&oe=68450D6E" },
    { path: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/473347714_122161776440291253_3387191776819644232_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Pv8uXGYdqPAQ7kNvwFcdUB9&_nc_oc=AdmLp4zBJdCHjQS1wblIcYWeVvs6EjB8KacfQ0A2E4VQ3Cm6FGaLrQWOe1fl0dkM5rM&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=pF5hd0eGyj0ap7xBWjd_qA&oh=00_AfIOjHMoiHIMNiRfTPTubSwdqKEJ72hX-gN0HjAZAtG6MQ&oe=6844F53A" },

    { path: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/472527695_122160588116291253_6042971184774235399_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AYtd1uZ_UiQQ7kNvwHvGy7f&_nc_oc=Adn6jX-HiuRznnHAMf3MdMUA1Q4llQvmbNLrgfr_oQDAMMpa-b0YCP8_XjJTNntWcxI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=oBMvT26_C_t5ZvMFRdRfCw&oh=00_AfJ91F36WzAVl2Fv_qoGFN7K4V7Kw9FLkbx5Qld0glw8Ng&oe=684509C2" },

    { path: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/497836844_122181246212291253_3485580234759325111_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lGh5eXoxl6kQ7kNvwFhuOgu&_nc_oc=AdmmHBB8cfcL0yxSV_yDMNBcLCZkusXd-7pgFhckcaZK_VDudWXIp0Qid0c9lu3eVXc&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=NzO9Ea5ZMGyapffLHgYstw&oh=00_AfKBnVfsWmFKsELlJ5uoa15EF3Oy9sEY_T0uIr9KWFrZDQ&oe=6844DD62"}
   
  ];
  

  return (
    <Slider {...settings} arrows={false}>
      {photos.map((photo) => (
        <div key={photo.path}>
          <div className="galleryPhoto">
            <Image src={photo.path} alt="image" layout="fill" objectFit="cover" {...photo} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

const Gallery = () => {
  return <Gallery1 />;
};

export default Gallery;