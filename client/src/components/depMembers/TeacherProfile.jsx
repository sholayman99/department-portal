import React from 'react';
import teacherStore from "../../store/teacherStore.js";
import ProfileSkeleton from "../../skeleton/Profile-Skeleton.jsx";

const TeacherProfile = () => {

    const {teacherDetails} = teacherStore();

    if(teacherDetails===null){
        return <ProfileSkeleton />
    }
    else{
        return (
            <main
                className={"lg:min-h-[100vh] min-h-screen md:min-h-[70vh] flex p-5 mt-20 lg:mt-0 md:mt-0  items-center justify-center"}>
                <section
                    className={" flex items-start flex-col bg-base-100 lg:flex-row md:flex-row lg:gap-10 gap-5 rounded-lg"}>
                    <div
                        className={"max-w-sm w-full flex items-center justify-center gap-2 flex-col p-5" +
                            " rounded-lg"}>
                        <div className="avatar">
                            <div className="w-24 ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full">
                                <img src={teacherDetails['avatar']} alt={""}/>
                            </div>
                        </div>
                        <div className={"my-3 w-full flex flex-col items-center gap-1"}>
                            <div className={"h-0.5 w-full bg-gray-400"}></div>
                            <h4 className={"text-center"}>{teacherDetails['bio']}</h4>
                            <div className={"h-0.5 w-full bg-gray-400"}></div>
                        </div>
                        <h2 className={"text-2xl text-primary font-semibold"}>{teacherDetails['teacherName']}</h2>
                        <h4 className={"text-lg font-semibold text-gray-700"}>{teacherDetails['designation']}</h4>
                        <h4 className={"text-lg text-gray-700"}>
                            <span className={"font-semibold"}>BCS batch:</span> {teacherDetails['bcsBatch']}
                        </h4>
                    </div>

                    <div className={"bg-base-100 flex flex-col gap-3 p-5 rounded-lg shadow-lg"}>
                        <div>
                            <h2 className={"text-xl font-semibold"}>Contact and basic info:</h2>
                            <div className={"h-0.5 w-full bg-gray-400"}></div>
                        </div>
                        <div>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Email:</span> {teacherDetails['email']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Mobile:</span> {teacherDetails['mobile']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Age:</span> {teacherDetails['age']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Hobby:</span> {teacherDetails['hobby']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Date of birth:</span> {teacherDetails['bod']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Qualification:</span> {teacherDetails['qualification']}</h3>
                        </div>

                        <div>
                            <h2 className={"text-xl font-semibold"}>Place lived:</h2>
                            <div className={"h-0.5 w-full bg-gray-400"}></div>
                        </div>
                        <div>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Village:</span> {teacherDetails['vil']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Post office:</span> {teacherDetails['po']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Police station:</span> {teacherDetails['ps']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>District:</span> {teacherDetails['dis']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Division:</span> {teacherDetails['division']}</h3>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

};

export default TeacherProfile;