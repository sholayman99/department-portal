import React from 'react';

const StudentSkeleton = () => {
    return (
        <section className={" lg:px-10 md:px-6  px-10 pb-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10"}>
            {
                Array.from({length: 8}).map((i) => {
                    return (
                        <div key={i} className="flex bg-base-100 rounded-lg p-5 flex-col gap-4">
                            <div className="flex flex-col gap-4 justify-center items-start">
                                <div className="skeleton w-28 h-28 rounded-full shrink-0"></div>
                                <div className="flex flex-col gap-4">
                                    <div className="skeleton h-4 w-32"></div>
                                    <div className="skeleton h-4 w-52"></div>
                                    <div className="skeleton h-4 w-52"></div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
};

export default StudentSkeleton;