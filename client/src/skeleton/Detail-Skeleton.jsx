import React from 'react';

const DetailSkeleton = () => {
    return (
        <section className={"lg:p-10 p-6 w-full"}>
            <div className="flex flex-col gap-10">
                <div className="skeleton h-6 w-96"></div>
                <div className="skeleton h-6 w-96"></div>
                {
                    Array.from({length:16}).map(()=>{
                        return (
                            <div className="skeleton h-4 w-full"></div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default DetailSkeleton;