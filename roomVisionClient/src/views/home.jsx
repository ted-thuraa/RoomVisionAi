import React from "react";
import styles from "../style";
import Header from "../components/Header";
import Pricing from "../components/Pricing";

import {
    DashShowcase,
    Business,
    CardDeal,
    Clients,
    CTA,
    Footer,
    Testimonials,
    Hero,
} from "../components/landingpage";

export default function Home() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <Header />

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                    <DashShowcase />
                </div>
            </div>

            <div
                className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
            >
                <div className={`${styles.boxWidth}`}>
                    <Business />
                    <CardDeal />
                    <Testimonials />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
}
