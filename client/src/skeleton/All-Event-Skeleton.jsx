import React from 'react';

const AllEventSkeleton = () => {
    return (
        <div className={"grid grid-cols-1 gap-10 lg:p-10 p-6"}>
            {
                Array.from({length: 2}).map((i) => {
                    return (
                        <div key={i} className="flex flex-col bg-base-100  gap-4 w-full">

                            <div className="skeleton h-6 w-48"></div>
                            {
                                Array.from({length: 10}).map((i) => {
                                    return (
                                        <div key={i} className="skeleton h-3 w-full"></div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllEventSkeleton;