import styles from "../Style";
import { appStore,googlePlay } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col  px-10 bg-slate-200`}>
    <div className={`${styles.flexStart} ${styles.boxWidth} md:flex-row flex-col mb-8 w-full`}>
      

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] ">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px]  hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex-[1] flex flex-row lg:flex-col justify-start mr-10 relative">
        <img
          src={googlePlay}
          alt="hoobank"
          className="w-[140px] h-[65px] lg:h-[72.14px] my-1 object-contain lg:absolute inset-y-0 right-0 "
        />
        <img
          src={appStore}
          alt="hoobank"
          className="w-[140px] h-[72.14px]  object-contain lg:absolute inset-y-12 right-0 "
        />
      </div>
    </div>

    <div className={`${styles.boxWidth} w-full  flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]`}>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px]">
        Copyright Ⓒ 2022 Snagajob. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer bg-black ${
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