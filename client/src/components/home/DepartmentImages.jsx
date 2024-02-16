import React from 'react';
import otherStore from "../../store/otherStore.js";
import SliderSkeleton from "../../skeleton/Slider-Skeleton.jsx";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import {motion} from "framer-motion";
const DepartmentImages = () => {

    let {imageList} = otherStore();

    if(imageList === null){
        return <SliderSkeleton />
    }
    else{

        let images =[
            {original:imageList[0]['img1'], thumbnail:imageList[0]['img1']},
            {original:imageList[0]['img2'], thumbnail:imageList[0]['img2']},
            {original:imageList[0]['img3'], thumbnail:imageList[0]['img3']},
            {original:imageList[0]['img4'], thumbnail:imageList[0]['img4']},
            {original:imageList[0]['img5'], thumbnail:imageList[0]['img5']},
        ]

        return (
            <section className={"py-5"}>
                <div className="lg:py-10 py-6 flex items-center justify-center flex-col">
                    <motion.h2 initial={{x: -250}} transition={{duration: 1.5, ease: "easeOut"}} whileInView={{x: 0}}
                               className="lg:text-[2.5rem] md:text-[2rem] uppercase text-[1.3rem] font-[sans-serif]
                         font-bold text-primary ">
                        Department Gallery
                    </motion.h2>
                    <div className="lg:w-20  w-12 h-[2px] bg-neutral rounded"></div>
                </div>
                <ImageGallery autoplay={true} items={images}/>

            </section>
        );
    }
};

export default DepartmentImages;