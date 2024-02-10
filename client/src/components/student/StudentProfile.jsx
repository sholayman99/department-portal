import React from 'react';
import studentStore from "../../store/studentStore.js";
import StudentSkeleton from "../../skeleton/Student-Skeleton.jsx";

const StudentProfile = () => {

    const {studentDetails} = studentStore();

    if(studentDetails === null){
        return <StudentSkeleton />
    }else{
        return (
            <main className={"lg:min-h-[100vh] min-h-screen md:min-h-[70vh] flex p-5 mt-20 lg:mt-0 md:mt-0  items-center justify-center"}>
                <section className={" flex items-start flex-col bg-base-100 lg:flex-row md:flex-row lg:gap-10 gap-5 rounded-lg"}>
                    <div
                        className={"max-w-sm w-full flex items-center justify-center gap-2 flex-col p-5" +
                            " rounded-lg"}>
                        <div className="avatar">
                            <div className="w-24 ring ring-primary ring-offset-base-100 ring-offset-2 rounded-full">
                                <img src={studentDetails['avatar']} alt={""}/>
                            </div>
                        </div>
                        <div className={"my-3 w-full flex flex-col items-center gap-1"}>
                            <div className={"h-0.5 w-full bg-gray-400"}></div>
                            <h4>{studentDetails['bio']}</h4>
                            <div className={"h-0.5 w-full bg-gray-400"}></div>
                        </div>
                        <h2 className={"text-2xl text-primary font-semibold"}>{studentDetails['studentName']}</h2>
                        <h4 className={"text-lg text-gray-700"}>
                        <span className={"font-semibold"}>Session:</span> {studentDetails['session']}
                        </h4>
                        <h4 className={"text-lg text-gray-700"}>
                            <span className={"font-semibold"}>Year:</span> {studentDetails['year']}
                        </h4>
                    </div>

                    <div className={"bg-base-100 flex flex-col gap-3 p-5 rounded-lg shadow-lg"}>
                        <div>
                            <h2 className={"text-xl font-semibold"}>Contact and basic info:</h2>
                            <div className={"h-0.5 w-full bg-gray-400"}></div>
                        </div>
                        <div>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Email:</span> {studentDetails['email']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Mobile:</span> {studentDetails['mobile']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Age:</span> {studentDetails['age']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Hobby:</span> {studentDetails['hobby']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Date of birth:</span> {studentDetails['bod']}</h3>
                        </div>

                        <div>
                            <h2 className={"text-xl font-semibold"}>Place lived:</h2>
                            <div className={"h-0.5 w-full bg-gray-400"}></div>
                        </div>
                        <div>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Village:</span> {studentDetails['vil']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Post office:</span> {studentDetails['po']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Police station:</span> {studentDetails['ps']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>District:</span> {studentDetails['dis']}</h3>
                            <h3 className={"text-md"}><span
                                className={"font-semibold"}>Division:</span> {studentDetails['division']}</h3>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
};

export default StudentProfile;