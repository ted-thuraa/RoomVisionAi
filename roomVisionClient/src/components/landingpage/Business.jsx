import { features } from "../../constants";
import styles, { layout } from "../../style";
import before1 from "../../assets/images/before1.jpg";
import after1 from "../../assets/images/after1.jpg";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
    <div
        className={`flex flex-row p-6 rounded-[20px] ${
            index !== features.length - 1 ? "mb-6" : "mb-0"
        } feature-card`}
    >
        <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        >
            <img
                src={icon}
                alt="star"
                className="w-[50%] h-[50%] object-contain"
            />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

const Business = () => (
    <section id="features" className="py-12 sm:py-16 lg:py-20 sm:mb-20">
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
            <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
                <h2 className="  leading-tight text-gray-300  xl:text-5xl font-pj mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal  sm:text-6xl">
                    Transform your space with the power of AI.
                </h2>
                <p className="mt-6 text-base text-gray-300 font-pj">
                    Create stunning, personalized designs in seconds.
                </p>
            </div>
            {/* <div className="grid max-w-4xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 sm:mt-12 lg:mt-20 sm:text-left">
                <div className="overflow-hidden bg-slate-800 shadow-md rounded-xl h-full">
                    <div className="p-9 pb-0 flex justify-between flex-col h-full">
                        <h3 className="text-2xl font-bold text-gray-300 font-pj">
                            Original room
                        </h3>
                        <p className="mt-6 text-base text-gray-300 font-pj">
                            Upload a few selfies and we'll create a virtual twin
                            of you. You can use this virtual twin to create your
                            own virtual photoshoots
                        </p>
                        <img src={before1} className="mt-8" />
                    </div>
                </div>
                <div className="overflow-hidden bg-slate-800 shadow-md rounded-xl">
                    <div className="p-9 pb-0">
                        <h3 className="text-2xl font-bold text-gray-300 font-pj">
                            New room
                        </h3>
                        <p className="mt-6 text-base text-gray-300 font-pj">
                            Upload a few selfies and we'll create a virtual twin
                            of you. You can use this virtual twin to create your
                            own virtual photoshoots
                        </p>
                        <img src={after1} className="mt-8" />
                    </div>
                </div>
            </div> */}
            <div className="flex flex-col space-y-10 mt-4 mb-16 sm:mt-16">
                <div className="flex sm:space-x-2 sm:flex-row flex-col">
                    <div className="mr-5">
                        <h2 className="mb-1 font-medium text-lg text-gray-50">
                            Original Interior
                        </h2>
                        <img
                            alt="Original photo"
                            src={before1}
                            className="w-96 h-96 rounded-2xl mt-5"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="sm:mt-0 mt-8">
                        <h2 className="mb-1 font-medium text-lg text-gray-50">
                            Rendered Interior
                        </h2>
                        <img
                            alt="Restored photo"
                            src={after1}
                            width={400}
                            height={400}
                            className="w-96 h-96 rounded-2xl sm:mt-5"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Business;
