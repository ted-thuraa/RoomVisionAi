import React, { useCallback, Fragment, useState, useEffect } from "react";
import axiosClient from "../axios-client";
import avatar from "../assets/images/avatar.jpg";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Navigate, Link, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
} from "@heroicons/react/20/solid";

export default function AdminLayout() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoaded, setAdminLoaded] = useState(false);
    const [email, setEmail] = useState();
    const { user, token, setUser, setToken } = useStateContext();
    const {
        currentColor,
        activeMenu,
        setActiveMenu,
        handleClick,
        isClicked,
        setScreenSize,
        screenSize,
    } = useStateContext();

    useEffect(() => {
        // Check if the authentication token is stored in local storage
        const authToken = localStorage.getItem("ACCESS_TOKEN");

        if (authToken) {
            // Make a request to the backend to verify the token
            axiosClient
                .get("/user")
                .then((response) => {
                    setIsLoggedIn(true);
                    setUser(response.data);
                    if (response.data.is_admin) {
                        setIsAdmin(true);
                        setEmail(response.data.email);
                        setAdminLoaded(true);
                    } else {
                        setIsAdmin(false);
                        setAdminLoaded(true);
                        setEmail(response.data.email);
                    }
                })
                .catch((error) => {
                    setIsLoggedIn(false);
                    setIsAdmin(false);
                    setAdminLoaded(true);
                    console.log(error);
                });
        } else {
            setIsLoggedIn(false);
            setAdminLoaded(true);
        }
    }, []);

    const onLogout = (ev) => {
        ev.preventDefault();

        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
            setIsLoggedIn(false);
        });
    };

    console.log(user);
    console.log(isLoggedIn);
    console.log(isAdmin);
    console.log(adminLoaded);

    if (adminLoaded && isLoggedIn && !isAdmin) {
        return <Navigate to="/design" />;
    } else if (adminLoaded && !isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            {adminLoaded && (
                <div className="bg-slate-100 h-screen overflow-y-scroll">
                    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <div class="px-3 py-3 lg:px-5 lg:pl-3">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center justify-start">
                                    <button
                                        data-drawer-target="logo-sidebar"
                                        data-drawer-toggle="logo-sidebar"
                                        aria-controls="logo-sidebar"
                                        type="button"
                                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    >
                                        <span class="sr-only">
                                            Open sidebar
                                        </span>
                                        <svg
                                            class="w-6 h-6"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                clip-rule="evenodd"
                                                fill-rule="evenodd"
                                                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                            ></path>
                                        </svg>
                                    </button>
                                    <a
                                        href="https://flowbite.com"
                                        class="flex ml-2 md:mr-24"
                                    >
                                        <img
                                            src="https://flowbite.com/docs/images/logo.svg"
                                            class="h-8 mr-3"
                                            alt="FlowBite Logo"
                                        />
                                        <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                            Flowbite
                                        </span>
                                    </a>
                                </div>
                                <div class="flex items-center">
                                    <div class="flex items-center ml-3">
                                        {token && (
                                            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                                                <Popover className="relative">
                                                    <Popover.Button className="flex items-center gap-x-1 border-0 text-sm font-semibold leading-6 text-gray-200">
                                                        <img
                                                            className="rounded-full w-8 h-8 object-cover"
                                                            src={avatar}
                                                        />
                                                        <p>
                                                            <span className="text-gray-400 text-14">
                                                                {email}
                                                            </span>{" "}
                                                        </p>
                                                        <ChevronDownIcon
                                                            className="h-5 w-5 flex-none text-gray-200"
                                                            aria-hidden="true"
                                                        />
                                                    </Popover.Button>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel className="absolute -left-36 top-full z-10 mt-3 w-80 max-w-md overflow-hidden  bg-white border-1  dark:bg-gray-200 p-6 rounded-lg ring-gray-900/5">
                                                            <div className="flex gap-5 items-center mt-1 border-color border-b-1 pb-6">
                                                                <div>
                                                                    <p className="text-gray-900 text-sm font-semibold dark:text-gray-400">
                                                                        {" "}
                                                                        {
                                                                            email
                                                                        }{" "}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-5 items-center mt-1 border-color border-b-1 pb-6  hover:bg-gray-200 cursor-pointer  dark:hover:bg-[#42464D]">
                                                                <div>
                                                                    <p className="text-gray-900 text-lg font-semibold dark:text-gray-400">
                                                                        Dashboard
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-5 items-center mt-1 border-color border-b-1 pb-6  hover:bg-gray-200 cursor-pointer  dark:hover:bg-[#42464D]">
                                                                <div>
                                                                    <Link
                                                                        onClick={
                                                                            onLogout
                                                                        }
                                                                        className="text-gray-900 text-lg font-semibold dark:text-gray-400"
                                                                    >
                                                                        Logout
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </Popover>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <aside
                        id="logo-sidebar"
                        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                        aria-label="Sidebar"
                    >
                        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                            <ul class="space-y-2">
                                <li>
                                    <Link
                                        to="/admin/dashboard"
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                            />
                                        </svg>

                                        <span class="ml-3">Dashboard</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/admin/users"
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                            />
                                        </svg>

                                        <span class="flex-1 ml-3 whitespace-nowrap">
                                            Users
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/admin/payments"
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                            />
                                        </svg>

                                        <span class="flex-1 ml-3 whitespace-nowrap">
                                            Payments
                                        </span>
                                        <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                            3
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="/admin/plans"
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">
                                            Plans
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>

                                        <span class="flex-1 ml-3 whitespace-nowrap">
                                            Settings
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                            />
                                        </svg>

                                        <span class="flex-1 ml-3 whitespace-nowrap">
                                            Generated renders
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    <div class="p-4 sm:ml-64">
                        <Outlet />
                    </div>
                </div>
            )}
        </>
    );
}
