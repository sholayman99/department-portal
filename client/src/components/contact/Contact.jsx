import React from 'react';
import otherStore from "../../store/otherStore.js";
import ContactSkeleton from "../../skeleton/Contact-Skeleton.jsx";

const Contact = () => {

    const {contact} = otherStore();

    if(contact === null){
        return <ContactSkeleton />
    }
    else{

        return (
            <section className={"lg:p-10 lg:min-h-[100vh] md:min-h-[80vh]  p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"}>
                {
                    contact.map((item,i)=>{
                        return(
                            <div key={i} className={"card  rounded-lg  flex flex-col " +
                                "justify-center items-center px-3 p"}>
                                <img src={item['img']} className={"w-16 pt-5"} alt={""} />
                                <h3 className={"text-xl my-5 font-bold uppercase text-primary"}>{item['title']}</h3>
                               <div className={"flex flex-col gap-5"}>
                                   {
                                       item['des'].split(",").map((text,i)=>{
                                           return (
                                               <p key={i} className={"text-gray-600 pb-3 text-center"}>{text}</p>
                                           )
                                       })
                                   }
                               </div>
                            </div>
                        )
                    })
                }
            </section>
        );
    }
};

export default Contact;