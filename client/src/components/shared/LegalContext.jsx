import React from 'react';
import otherStore from "../../store/otherStore.js";
import LegalSkeleton from "../../skeleton/Legal-Skeleton.jsx";

const LegalContext = () => {
    const {legal} = otherStore();
    if(legal === null){
        return <LegalSkeleton />
    }
    else {
        return (
            <section className={"lg:p-10 p-6 grid grid-cols-1 gap-10 "}>
                {
                    legal['des'].split(",").map((item,i)=>{
                        return(
                                <p key={i}> <b>{i+1}.</b> {item}</p>
                        )
                    })
                }
            </section>
        );
    }
};

export default LegalContext;