import { Fragment, useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { useStateContext } from "../contexts/ContextProvider.jsx";

import UserProfile from "./UserProfile";
import avatar from "../assets/images/avatar.jpg";
import logo from "../assets/images/logo.svg";
import axiosClient from "../axios-client.js";
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

const products = [
    {
        name: "Rooms",
        description: "Render ideas for all sort of rooms",
        href: "/design",
        icon: ChartPieIcon,
    },
    {
        name: "Mode",
        description: "Choose the perfect mode for your render",
        href: "/design",
        icon: CursorArrowRaysIcon,
    },
    {
        name: "Style",
        description:
            "Choose from a wide variety of styles that match your ideas",
        href: "/design",
        icon: FingerPrintIcon,
    },
];
const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        getCurUser();
    }, []);

    const getCurUser = () => {
        axiosClient
            .get("/user")
            .then(({ data }) => {
                console.log(data);
                setEmail(data.email);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log(email);

    const onLogout = (ev) => {
        ev.preventDefault();

        axiosClient.post("/logout").then(() => {
            setUser({});
            setToken(null);
        });
    };

    return (
        <header className=" w-full">
            <nav
                className="mx-auto fixed flex items-center justify-between p-4 lg:px-8  !bg-opacity-90 !backdrop-blur-lg !shadow-sm  w-full z-50 top-0 d-none-mobile-app inset-x-0"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 flex items-center">
                        <img className="h-10 w-10" src={logo} alt="logo" />
                        <span className="text-slate-300 sm:text-3xl text-2xl font-bold ml-2 tracking-tight">
                            RoomVision.Ai
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-200">
                            Features
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
                            <Popover.Panel className="absolute background_bluish -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl border-slate-500 shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-700"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg  ">
                                                <item.icon
                                                    className="h-6 w-6 text-gray-200 group-hover:text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="flex-auto">
                                                <a
                                                    href={item.href}
                                                    className="block font-semibold text-gray-200"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-200">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-200/5 bg-gray-800">
                                    {callsToAction.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-200 hover:bg-gray-100"
                                        >
                                            <item.icon
                                                className="h-5 w-5 flex-none text-gray-200"
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Link
                        to="/design"
                        className="text-sm font-semibold leading-6 text-gray-200"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/"
                        className="text-sm font-semibold leading-6 text-gray-200"
                    >
                        Blog
                    </Link>
                </Popover.Group>

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
                                <Popover.Panel className="absolute -left-36 top-full z-10 mt-3 w-80 max-w-md overflow-hidden  background_bluish border-1 border-slate-500 dark:bg-[#42464D] p-6 rounded-lg ring-gray-900/5">
                                    <div className="flex gap-5 items-center mt-1 border-color border-b-1 pb-6">
                                        <div>
                                            <p className="text-gray-300 text-sm font-semibold dark:text-gray-400">
                                                {" "}
                                                {email}{" "}
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
                                            Upgrade to pro
                                        </a>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </div>
                )}
                {isClicked.userProfile && <UserProfile />}
                {!token && (
                    <>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                            <div className="">
                                <Link
                                    to="/login"
                                    className="text-sm font-semibold leading-6 text-gray-200 group flex items-center cursor-pointer transition ease-in-out no-underline no-touch-hover:hover:text-brand-typo active:text-brand-typo text-typo py-6 focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover rounded"
                                >
                                    Log in
                                </Link>
                            </div>
                            <div className="ml-5 flex items-center bg-slate-800 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded-full">
                                <Link
                                    to="/signup"
                                    className="h-8 leading-6 text-gray-200 !border !border-transparent rounded-full font-bold transition ease-in-out text-center font-body no-underline hover:no-underline inline-flex items-center justify-center text-base px-6  active:scale-[0.98] text-typo !bg-secondary hover:!bg-secondary-hover active:!bg-secondary-hover focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary-hover"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel
                    focus="true"
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                >
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-200"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                                Product
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "rotate-180"
                                                            : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[
                                                    ...products,
                                                    ...callsToAction,
                                                ].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-500"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-500"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-500"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/login"
                                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-500"
                                >
                                    Log in
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/signup"
                                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-500"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
