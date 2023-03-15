import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import axiosClient from "../axios-client.js";

import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";
import { Link } from "react-router-dom";

export default function UserProfile() {
    const { user, token, currentColor, setUser, setToken } = useStateContext();

    const onLogout = (ev) => {
        ev.preventDefault();

        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    };

    return (
        <>
            {token && (
                <div className="nav-item absolute right-1 top-16 bg-black border-1 border-slate-300 dark:bg-[#42464D] p-6 rounded-lg w-80">
                    <div className="flex justify-between items-center">
                        <Button
                            icon={<MdOutlineCancel />}
                            color="rgb(153, 171, 180)"
                            bgHoverColor="light-gray"
                            size="2xl"
                            borderRadius="50%"
                        />
                    </div>
                    <div className="flex gap-5 items-center mt-1 border-color border-b-1 pb-6">
                        <div>
                            <p className="text-gray-300 text-sm font-semibold dark:text-gray-400">
                                {" "}
                                mutwirited@gmail.com{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center mt-1 border-color border-b-1 pb-6  hover:bg-gray-900 cursor-pointer  dark:hover:bg-[#42464D]">
                        <div>
                            <p className="text-gray-300 text-sm font-semibold dark:text-gray-400">
                                Dashboard
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center mt-1 border-color border-b-1 pb-6  hover:bg-gray-900 cursor-pointer  dark:hover:bg-[#42464D]">
                        <div>
                            <Link
                                onClick={onLogout}
                                className="text-gray-300 text-lg font-semibold dark:text-gray-400"
                            >
                                Logout
                            </Link>
                        </div>
                    </div>
                    <div className="mt-5">
                        <a
                            className="bg-white rounded-xl text-gray-900 font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-200"
                            href="/restore"
                        >
                            Watch demo
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
