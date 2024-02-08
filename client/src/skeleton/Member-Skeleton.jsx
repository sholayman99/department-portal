import React from 'react';

const MemberSkeleton = () => {
    return (
       <section className={" lg:px-10 px-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"}>
           {
             Array.from({length:6}).map((i)=>{
                 return (
                     <div key={i} className="flex bg-base-100 rounded-lg p-5 flex-col gap-4">
                         <div className="flex flex-col gap-4 justify-center items-start">
                             <div className="skeleton w-32 h-32 rounded-full shrink-0"></div>
                             <div className="flex flex-col gap-4">
                                 <div className="skeleton h-4 w-48"></div>
                                 <div className="skeleton h-4 w-64"></div>
                                 <div className="skeleton h-4 w-64"></div>
                             </div>
                         </div>
                     </div>
                 )
             })
           }
       </section>
    );
};

export default MemberSkeleton;