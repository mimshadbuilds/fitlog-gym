'use client'

import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";
import logo from '@/assets/logo.png'
import { useContext } from "react";
import { PlanContext } from "@/context/PlanContext";

const Navbar = () => {
    const { myPlan, savedList } = useContext(PlanContext);
    const pathname = usePathname();
    const links = 
    <>
        {/* <li><Link className={`links ${pathname === '/' ? 'text-blue-500' : 'text-slate-700'} font-semibold`} href='/'>Home</Link></li> */}
        <li><Link className={`links ${pathname === '/' ? 'text-[#c2f800]' : 'text-white'} font-semibold`}  href='/'>Workout</Link></li>
        <li><Link className={`links ${pathname === '/my-plan' ? 'text-[#c2f800]' : 'text-white'} font-semibold`}  href='/my-plan'>My Plan</Link></li>

    </>
    return (
        <nav className="bg-[#0c0d10] shadow-sm">
            <div className="navbar max-w-[1240px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        aria-label="Menu"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        {" "}
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />{" "}
                        </svg>
                    </div>
                    <ul tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow md:block hidden">
                    {links}
                    </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={logo} alt="nav logo" height={20} width={20} />
                        <Link href={'/'} className="text-2xl text-white font-bold">FITLOG</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <Link href="/my-plan" className={`myPlan ${pathname === '/my-plan' ? 'text-[#9ae600]' : ''} text-sm font-semibold `}>Plan {`(${myPlan.length})`}</Link>
                    <Link href="/my-plan" className={`savedList ${pathname === '/my-plan' ? 'text-[#9ae600]' : ''} text-sm font-semibold `}>Saved {`(${savedList.length})`}</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
