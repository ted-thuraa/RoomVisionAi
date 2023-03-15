import React from "react";
import Header from "../components/Header";

export default function Landing() {
    return (
        <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <div>
                <title>Face Photo Restorer</title>
            </div>

            <Header />
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
                <p className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
                    Used by over <span className="font-semibold">200,000</span>{" "}
                    happy users
                </p>
                <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
                    Experience the Magic of{" "}
                    <span className="relative whitespace-nowrap ">
                        <span className="relative text_rgb">AI-Powered</span>
                    </span>{" "}
                    Interior Design.
                </h1>
                <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
                    Experience the magic of restoring your favorite photographs
                    with unparalleled accuracy and detail. . 100% free – restore
                    your photos today.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        className="bg-rgb rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
                        href="/restore"
                    >
                        Restore your photos
                    </a>
                </div>
            </main>
        </div>
    );
}
