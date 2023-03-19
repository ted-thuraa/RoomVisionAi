import styles from "../../style";
import { Link, Navigate, Outlet } from "react-router-dom";
import { logo } from "../../assets/images";
import { footerLinks, socialMedia } from "../../constants";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex-[1] flex flex-col justify-start mr-10">
                <Link to="/" className="-m-1.5 p-1.5 flex items-center">
                    <img className="h-10 w-10 logo_rgb" src={logo} alt="logo" />
                    <span className="text-slate-300 logo_rgb sm:text-3xl text-2xl font-bold ml-2 tracking-tight">
                        Intellidecor.Ai
                    </span>
                </Link>
                <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                    A new way to render designs for your room easy and fast.
                </p>
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerlink) => (
                    <div
                        key={footerlink.title}
                        className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
                    >
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                            {footerlink.title}
                        </h4>
                        <ul className="list-none mt-4">
                            {footerlink.links.map((link, index) => (
                                <li
                                    key={link.name}
                                    className={`font-poppins font-normal text-[16px] leading-[24px] text-slate-400 hover:text-secondary cursor-pointer ${
                                        index !== footerlink.links.length - 1
                                            ? "mb-4"
                                            : "mb-0"
                                    }`}
                                >
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                Copyright Ⓒ 2023 RoomVision. All Rights Reserved.
            </p>

            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                            index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                        }`}
                        onClick={() => window.open(social.link)}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Footer;
