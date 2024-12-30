import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";


const Navbar = () => {
  
  const navLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Services",
      path: "/services"
    },
    {
      title: "Blog",
      path: "/blog"
    },
    {
      title: "Contact",
      path: "/contact"
    }
  ]

  return (
    <div className="text-black ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
            <div className="flex flex-col space-y-2">
            {navLinks.map((link) =>(
              <Link className="font-semibold " href={link.path} key={link.path}>
                {link.title}
              </Link>
            ))} 
            </div>            
            </ul>
          </div>
          <div className="ml-4">
          <Link href="/">
          <Image src="/assets/logo.svg" alt="logo" width={50} height={100} />
          </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">          
          <div className="flex space-x-4">
            {navLinks.map((link) =>(
              <Link className="font-semibold hover:text-primary duration-300" href={link.path} key={link.path}>
                {link.title}
              </Link>
            ))} 
            </div> 
          </ul>
        </div>
        <div className="navbar-end mr-4 space-x-4 ">
        <IoSearchOutline className="text-2xl"></IoSearchOutline> 
        <IoCartOutline className="text-2xl"></IoCartOutline>
          <Link className="btn btn-outline btn-primary py-2 px-6 rounded-xl" href="/appointment">Appointment</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
