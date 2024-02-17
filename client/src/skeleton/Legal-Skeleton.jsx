import React from 'react';

const LegalSkeleton = () => {
    return (
        <section className={"p-10 grid grid-cols-1 gap-10"}>
            {
                Array.from({length:4}).map(()=>{
                    return (
                        <div className="flex flex-col gap-4 w-full">
                            <div className="skeleton h-4 w-[60%]"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default LegalSkeleton;