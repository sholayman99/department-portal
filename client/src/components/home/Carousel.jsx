// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
// import required modules
import { Autoplay, Pagination, Navigation,Keyboard } from "swiper/modules";
import { Link } from "react-router-dom";
import otherStore from "../../store/otherStore.js";
import SliderSkeleton from "../../skeleton/Slider-Skeleton.jsx";
import React from "react";

const Carousel = () => {

    const {programmeList} = otherStore();

    if(programmeList === null){
        return <SliderSkeleton />
    }else{
        return (
            <>
                <Swiper
                    pagination={{type: "progressbar", clickable: true}}
                    grabCursor={true} keyboard={{enabled: true}}
                    style={{
                        "--swiper-pagination-color": "black",
                        "--swiper-navigation-color": "black",
                    }}
                    loop={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation,Keyboard]}
                    className="mySwiper"
                >
                    {programmeList?.map((slide, index) => (
                        <SwiperSlide
                            className="flex bg-base-200 items-center p-5 justify-center" key={index}>
                            <Link to={"/"}
                                className="bg-base-100 shadow-xl rounded-md m-3 lg:m-8 hover:scale-105 transition
                                 duration-500 ease-in-out hover:border-2 border-neutral">
                                <div className="flex items-center  justify-center flex-col gap-3 p-2 ">
                                    <img alt={""} src={slide['img']}
                                        className=" w-full h-[180px] lg:h-[300px] lg:w-[800px] md:h-[200px] md:w-[500px]"/>
                                    <div>
                                        <h1 className="lg:text-[1.5rem] uppercase md:text-[1.2rem] text-neutral font-bold">
                                            {slide['course']}
                                        </h1>
                                        <p className={"text-gray-600"}>{slide['text']}</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        );
    }

};

export default Carousel;