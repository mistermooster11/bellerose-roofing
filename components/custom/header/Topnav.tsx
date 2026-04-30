'use client';
import { Menu, Phone } from 'lucide-react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

interface TopnavProps {
    onMobileMenuClick?: () => void;
}

const Topnav = ({ onMobileMenuClick }: TopnavProps) => {
    return (
        <div className="bg-[#101d2b] border-b border-[rgba(161,197,211,.3)] w-full">
            <div className="inner inner-header flex flex-row items-center justify-between min-h-[4.4rem] p-0">

                {/* Mobile logo */}
                <Link href="/" className="block lg:hidden float-left" aria-label="Pipe Monkeys">
                    {/* [TODO: Replace with Pipe Monkeys logo SVG] */}
                    <img src="/logos/logo-94.svg" alt="Pipe Monkeys" className="block h-[3.6rem]" />
                </Link>

                {/* Left: phone number — desktop only */}
                <div className="header__left hidden lg:block">
                    <a
                        href="tel:7187491830"
                        className="flex items-center gap-2 text-brand-sky text-[1.4rem] font-light tracking-[.05rem] py-[2rem] no-underline transition-colors duration-[350ms] hover:text-[#daedf5]"
                    >
                        <Phone size={14} strokeWidth={2} />
                        <span>(718) 749-1830 — Same-Day Service Available</span>
                    </a>
                </div>

                {/* Right: socials + mobile menu */}
                <div className="flex flex-wrap items-center py-[.8rem]">
                    <div className="hidden lg:flex mr-[1.5rem]">
                        <SocialLinks layout="row" />
                    </div>
                    <button
                        onClick={onMobileMenuClick}
                        className="lg:hidden flex items-center justify-center ml-[1.3rem] bg-transparent border-0 cursor-pointer text-white p-[0.4rem]"
                        aria-label="Menu"
                    >
                        <Menu size={30} strokeWidth={2.5} />
                        <em className="sr-only not-italic">Menu icon</em>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Topnav;
