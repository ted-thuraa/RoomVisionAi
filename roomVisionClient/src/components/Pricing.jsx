import React from "react";

export default function Pricing() {
    return (
        <section class=" dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto md:mt-12 max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
                        Designed for Creatives like you
                    </h2>
                    <p class="mb-5 font-light text-white sm:text-xl dark:text-gray-400">
                        Here at Intellidecor we focus on giving creatives like
                        you, tools to unlock creativity potential.
                    </p>
                </div>
                <div class="md:mt-16 space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 background_bluish rounded-lg   dark:bg-gray-800 dark:text-white">
                        <h3 class="mb-4 text-gray-100 text-2xl font-semibold">
                            IntelliDecor Ai free
                        </h3>
                        <p class="font-light text-gray-100 sm:text-lg dark:text-gray-400">
                            Best option to get started with. Upgrade any time to
                            unlock the full potential of creativity
                        </p>
                        <div class="flex justify-center items-baseline my-8">
                            <span class="mr-2 text-5xl text-gray-100 font-extrabold">
                                $free
                            </span>
                            <span class="text-gray-400 dark:text-gray-400">
                                /month
                            </span>
                        </div>

                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>Individual configuration</span>
                            </li>
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>
                                    Team size:{" "}
                                    <span class="font-semibold">
                                        1 developer
                                    </span>
                                </span>
                            </li>
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>
                                    Premium support:{" "}
                                    <span class="font-semibold">6 months</span>
                                </span>
                            </li>
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>
                                    Free updates:{" "}
                                    <span class="font-semibold">6 months</span>
                                </span>
                            </li>
                        </ul>
                        <a
                            href="#"
                            class="text-black bg-white hover:bg-slate-200 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                        >
                            Get started
                        </a>
                    </div>
                    <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 background_bluish rounded-lg   dark:bg-gray-800 dark:text-white">
                        <h3 class="mb-4 text-gray-100 text-2xl font-semibold">
                            IntelliDecor Ai pro
                        </h3>
                        <p class="font-light text-gray-100 sm:text-lg dark:text-gray-400">
                            Best option for personal use & for your next
                            project.
                        </p>
                        <div class="flex justify-center items-baseline my-8">
                            <span class="mr-2 text-5xl text-gray-100 font-extrabold">
                                $29
                            </span>
                            <span class="text-gray-400 dark:text-gray-400">
                                /month
                            </span>
                        </div>

                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>Individual configuration</span>
                            </li>
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>
                                    Team size:{" "}
                                    <span class="font-semibold">
                                        1 developer
                                    </span>
                                </span>
                            </li>
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>
                                    Premium support:{" "}
                                    <span class="font-semibold">6 months</span>
                                </span>
                            </li>
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>
                                    Free updates:{" "}
                                    <span class="font-semibold">6 months</span>
                                </span>
                            </li>
                        </ul>
                        <a
                            href="#"
                            class="text-black bg-white hover:bg-slate-200 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                        >
                            Get started
                        </a>
                    </div>
                    <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 background_bluish rounded-lg   dark:bg-gray-800 dark:text-white">
                        <h3 class="mb-4 text-gray-100 text-2xl font-semibold">
                            IntelliDecor Ai for Teams
                        </h3>
                        <p class="font-light text-gray-100 sm:text-lg dark:text-gray-400">
                            Best option teams of upto 10 people. Great for
                            interior design agencies. Save 50%
                        </p>
                        <div class="flex justify-center items-baseline my-8">
                            <span class="mr-2 text-5xl text-gray-100 font-extrabold">
                                $59
                            </span>
                            <span class="text-gray-400 dark:text-gray-400">
                                /month
                            </span>
                        </div>

                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>Individual configuration</span>
                            </li>
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>
                                    Team size:{" "}
                                    <span class="font-semibold">
                                        1 developer
                                    </span>
                                </span>
                            </li>
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>
                                    Premium support:{" "}
                                    <span class="font-semibold">6 months</span>
                                </span>
                            </li>
                            <li class="flex items-center text-gray-100 space-x-3">
                                <svg
                                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span>
                                    Free updates:{" "}
                                    <span class="font-semibold">6 months</span>
                                </span>
                            </li>
                        </ul>
                        <a
                            href="#"
                            class="text-black bg-white hover:bg-slate-200 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                        >
                            Get started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
