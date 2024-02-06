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
          className="hero  p-5 bg-base-200">
        <div className="hero-content p-10 rounded-md justify-between bg-base-100 items-start
        flex-col-reverse md:flex-row-reverse lg:flex-row-reverse">
           <div className="rounded-lg shadow-3xl bg-base-300 gap-10 hover:scale-105
           transition duration-500 ease-in-out hover:border-2 border-neutral">
               <img src={ messageList['avatar'] } alt="Professor Dr. S. M. Afzal Hossain"
               className={"lg:max-w-md lg:w-[350px] max-h-xl lg:h-[400px] md:h-[300px]"}/>
               <p className="text-center font-bold py-2">{messageList['name']}</p>
            </div>
            <div className="lg:max-w-[50%] md:max-w-[50%] w-full ">
               <div className="flex  justify-start items-center">
                   <div className="w-[2px] h-5 lg:h-8 bg-neutral rounded"></div>
                       <h1 className="lg:text-[2.2rem] uppercase text-[1.3rem]
                       text-primary lg:ml-2 ml-1 font-[500]">
                        {messageList['title']}
                        </h1>
                   </div>

                   <p className="py-6  text-gray-600 text-justify">
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