import { Link } from "react-router-dom";
import styles from "../../style";
import Button from "./Button";

const CTA = () => (
    <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:mb-40 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>Try our service now!</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Everything you need to try new ideas for your interior or
                exterior space .
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Link
                to={"/design"}
                type="button"
                className="bg-white rounded-xl text-gray-900 font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-300"
            >
                Get Started
            </Link>
        </div>
    </section>
);

export default CTA;
