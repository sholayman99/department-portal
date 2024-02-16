import React from 'react';

const ContactSkeleton = () => {
    return (
        <section className={"lg:p-10 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"}>
            {
                Array.from({length:3}).map((index)=>{
                    return (
                        <div key={index} className="flex flex-col gap-4 w-52">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default ContactSkeleton;