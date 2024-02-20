import React from 'react';

const NoticeSkeleton = () => {
    return (
        <section className={"lg:p-10 p-6"}>
            {
                Array.from({length:6}).map((i)=>{
                    return (
                        <div key={i} className="flex flex-col gap-4 w-full">
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

export default NoticeSkeleton;