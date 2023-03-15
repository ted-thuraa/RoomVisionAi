import gallery from "../../assets/images/gallery.webp";

import Button from "./Button";

const CardDeal = () => (
    <section className="py-16 sm:mb-40">
        <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-medium leading-tight text-gray-300 sm:text-4xl xl:text-5xl font-pj">
                Go beyond realistic renders <br className="sm:block hidden" />{" "}
                in few easy steps.
            </h2>
            <p className="mt-2 text-base font-normal max-w-xl mx-auto leading-7 text-gray-400 lg:text-lg lg:leading-8">
                Choose from a wide range of styles to create the perfect renders
            </p>
        </div>
        <div className="bg-gray-300 p-2 mx-16">
            <img src={gallery} className=" mx-auto object-cover" />
        </div>
    </section>
);

export default CardDeal;
