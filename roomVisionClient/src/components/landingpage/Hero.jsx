import styles from "../../style";

const Hero = () => {
    return (
        <section
            id="home"
            className="flex flex-1 w-full  flex-col items-center justify-center text-center px-4 sm:mt-28 sm:mb-14 mt-20"
        >
            {/* <p className="border rounded-2xl py-1 px-4 text-slate-400 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
                Used by over <span className="font-semibold">200,000</span>{" "}
                happy users
            </p> */}
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-white sm:text-7xl">
                Revolutionize your home design process
                <span className="relative whitespace-nowrap ">
                    <span className="relative text_rgb"> with AI</span>
                </span>{" "}
            </h1>

            <p className="mx-auto mt-12 max-w-xl text-lg text-slate-300 leading-7">
                Experience the magic of interior and exterior design with
                unparalleled accuracy and detail using Ai. . 100% free – render
                new ideas today.
            </p>
            <div className="flex items-center flex-row">
                <div className="flex justify-center space-x-4 mr-5">
                    <a
                        className="bg-white rounded-xl text-gray-900 font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-200"
                        href="/restore"
                    >
                        Watch demo
                    </a>
                </div>
                <div className="flex justify-center space-x-4">
                    <a
                        className="bg-rgb rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
                        href="/design"
                    >
                        Render Ideas
                    </a>
                </div>
            </div>

            <div
                className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
            >
                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>
        </section>
    );
};

export default Hero;
