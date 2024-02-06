import React from 'react';
import otherStore from "../../store/otherStore.js";
import MessageSkeleton from "../../skeleton/Message-Skeleton.jsx";
import {motion} from "framer-motion"

const Message = () => {

const {messageList} = otherStore();

if(messageList===null){
        return  <MessageSkeleton />
}
else{
  return (
      <motion.section initial={{y:150}} transition={{ duration: 1.5,ease:"easeOut"}} whileInView={{y:0}}
          className="hero py-10 bg-base-100">
        <div className="hero-content justify-between items-start flex-col-reverse md:flex-row-reverse lg:flex-row-reverse">
           <div className="border-t-[20px] border-r-[20px] border-l-[20px] border-b-[30px] border-base-200
            rounded-lg shadow-3xl bg-base-200 gap-10">
               <img src={ messageList['avatar'] } alt="Professor Dr. S. M. Afzal Hossain"
               className={"lg:max-w-md lg:w-[350px] max-h-xl lg:h-[400px] md:h-[300px]"}/>
               <p className="text-center font-bold mt-2">{messageList['name']}</p>
            </div>
            <div className="lg:max-w-[50%] md:max-w-[50%] w-full ">
               <div className="flex  justify-start items-center">
                   <div className="w-[2px] h-5 lg:h-8 bg-neutral rounded"></div>
                       <h1 className="lg:text-[2.2rem] uppercase text-[1.3rem] font-[sans-serif]
                       text-primary lg:ml-2 ml-1 font-semibold">
                        {messageList['title']}
                        </h1>
                   </div>

                   <p className="py-6  text-gray-600 font-[sans-serif] text-justify">
                   {messageList['message']}
                   </p>
               <div>
                   <h3 className="font-semibold">{messageList['name']}</h3>
                   <h2 className="font-bold">Chairman</h2>
                   {
                       messageList['text'].split(',').map((item,i)=>{
                           return (
                               <p key={i} className="text-gray-600">{item}</p>
                                 )
                       })
                   }
                   <p className="text-gray-600">{messageList['add']}</p>

               </div>
            </div>
        </div>
      </motion.section>

        );
    }
};

export default Message;