import React from 'react';

const ProfileSkeleton = () => {
    return (
        <section className={"flex min-h-screen flex-col justify-center items-center"}>

            <div className={"bg-base-100 p-5 rounded-lg flex flex-col lg:flex-row gap-10 md:flex-row"}>
                <div className="flex min-w-sm w-72 flex-col gap-4">
                    <div className="skeleton rounded-full w-32 h-32 "></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>

                <div className="flex min-w-sm  rounded-lg  flex-col gap-4 w-52">
                    {
                        Array.from({length: 10}).map((i) => {
                            return (
                                <div key={i} className="skeleton h-3 w-full"></div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    );
};

export default ProfileSkeleton;