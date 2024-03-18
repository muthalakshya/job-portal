import { useState } from "react";

import { close, airbnb, menu } from "../assets";
import { navLinks ,data} from "../constants";

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const [job, setJob] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navBar ">
      <img src={airbnb} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) =>(
          <li 
            key={nav.id}
            className={`bg-slate-50 font-poppins cursor-pointer text-[18px] text-black font-medium
             ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => { setActive(nav.title);{index === navLinks.length - 2 ? setJob(!job) : ""} } }
          >
            {nav.title}{index === navLinks.length - 2? job?" ^ ":" v ":" "}
            {index === navLinks.length - 2?
                    <div className={` ${
                        !job ? "hidden": "flex"
                      } p-6 bg-slate-100 absolute top-20 right-80 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                        <ul className="list-none flex justify-end items-start flex-1 flex-col">
                            {data.map((nav, index) => (
                              <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                  active === nav.title ? "text-blue-700" : "text-black"
                                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} `}
                                onClick={() => setActive(nav.title)}
                              >
                               <a href={`#${nav.id}`}>{nav.title}</a>
                              </li>
                            ))}
                        </ul>
                    </div>
                :
                    ""
            }
            </li>
        ))}
        <li className={`bg-slate-50 font-poppins cursor-pointer text-[18px] text-blue-700 font-medium ml-10 p-2 border border-blue-700 rounded-full `}>
            <button>Log In</button>
        </li>
      </ul>

      <div className="sm:hidden flex flex-2 justify-end items-center ">
            <h1 className="mx-8 font-medium">Post a Job</h1>
          <img
            src={toggle ? close:menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain bg-black"
            onClick={() => setToggle(!toggle)}
          />
      </div>

      {/* mx-4 my-2 min-w-[140px] */}
      <div className={`${
        !toggle ? "hidden": "flex"
      } p-6 border border-top-black absolute top-20 right-0 bg-white overflow-hidden   w-full h-full`}>
        <ul className="list-none flex   items-start flex-1 flex-col ">
            <li className={`w-full bg-slate-50 font-poppins cursor-pointer text-[20px] text-center my-5 text-blue-700 font-medium  p-2 border border-blue-700 rounded-full `}>
                <button>Log In or Sign up</button>
            </li>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] mt-8
                 ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{index === navLinks.length - 2?nav.title:""}</a>
                
              </li>
            ))}
          </ul>

      </div>
    </nav>
  )
}

export default Navbar