import React from "react";
import { Link } from "gatsby";
import { ReactComponent as Logo } from "@/images/Logo.svg";
import { ReactComponent as Behance } from "@/images/SocialNetworksIcons/Behance.svg";
import { ReactComponent as Dribbble } from "@/images/SocialNetworksIcons/Dribbble.svg";
import { ReactComponent as Facebook } from "@/images/SocialNetworksIcons/Facebook.svg";
import { ReactComponent as Instagram } from "@/images/SocialNetworksIcons/Instagram.svg";
import { ReactComponent as LinkedIn } from "@/images/SocialNetworksIcons/LinkedIn.svg";
import { ReactComponent as Telegram } from "@/images/SocialNetworksIcons/Telegram.svg";

const Footer = () => {
    const NAV_ITEMS = [
        { name: "Success Stories", link: "/success-stories" },
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "Blog", link: "/blog" },
        { name: "About us", link: "/about-us" },
        { name: "Career", link: "/career" },
    ];

    const SOCIAL_NETWORKS = [
        { Icon: Dribbble, link: "" },
        { Icon: LinkedIn, link: "" },
        { Icon: Behance, link: "" },
        { Icon: Instagram, link: "" },
        { Icon: Facebook, link: "" },
        { Icon: Telegram, link: "" },
    ];

    return (
        <footer className="bg-gray-900 text-white py-10 mt-10">
            <div className="container mx-auto flex flex-col items-center text-center space-y-6">
                <Logo className="w-32" />

                <nav className="flex flex-wrap justify-center space-x-6 text-lg">
                    {NAV_ITEMS.map(({ name, link }) => (
                        <Link
                            key={name}
                            to={link}
                            className="font-[Source Sans 3] text-[14px] font-semibold leading-[21px] tracking-[-0.03em] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none]"
                        >
                            {name}
                        </Link>
                    ))}
                </nav>

                <div className="flex space-x-6">
                    {SOCIAL_NETWORKS.map(({ Icon, link }, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                            <Icon className="w-5 my-auto" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
