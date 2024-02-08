import React from 'react';

const MessageSkeleton = () => {
    return (
        <div className="flex flex-col py-10 bg-base-100 px-5 gap-4 w-full">
            <div className="skeleton h-72 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            {
                Array.from({length:8}).map((i)=>{
                    return (
                        <div key={i} className="skeleton h-4 w-full"></div>

                )
                })
            }
        </div>
    );
};

export default MessageSkeleton;