import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

// import required modules
import { Pagination, Navigation,Parallax ,Autoplay} from 'swiper/modules';
import otherStore from "../../store/otherStore.js";
import SliderSkeleton from "../../skeleton/Slider-Skeleton.jsx";

const Slider = () => {
    const {sliderList} = otherStore();

    if(sliderList === null){
        return <SliderSkeleton />
    }else{
        return (
            <>
                <Swiper
                    pagination={{type: 'progressbar'}}
                    navigation={true} modules={[Pagination,Autoplay, Navigation]}
                    loop={true}  slidesPerView={1} spaceBetween={30} className="mySwiper"
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}>
                    {
                        sliderList.map((item,i)=>{
                            return(
                                <SwiperSlide>
                                    <img src={item['img']} className={"object-cover h-[100vh] w-full "} alt={""} />
                                    <h2>{item['text']}</h2>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </>
        );
    }
};

export default Slider;