import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter1} ${styles.paddingY}  flex-col`}>
    {/* <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className=" flex-[1] flex flex-col justify-start mr-10">
        {/* <img
          
          alt="Globe"
          className="w-[266px] h-[72.14px] object-contain"
        /> *
        <h1>GLOBE</h1>
        <p className={`${styles.paragraph2} text-black  mt-4 max-w-[312px]`}>
        you just cant ignore us
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins  font-medium text-[18px] leading-[27px] ">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimblack hover:text-secondary cursor-pointer ${
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

</div> */}

{/* <span  class="font-bueno flex h-fit items-baseline overflow-clip bg-gradient-to-b from-black to-gray-600 bg-clip-text text-[min(40vw,1000px)] font-extrabold text-transparent dark:from-white dark:to-gray-800" data-svelte-h="svelte-14rg1m2">THISUX</span> */}


    {/* <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 Globe Chemicals. All Rights Reserved.
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
    </div> */}
    
    <div class="flex justify-center items-center h-screen">
<h1 class="font-bueno font-bold text-gradient  text-6xl sm:text-9xl md:text-[16vw] max-w-screen-xl mx-auto">SOWRAJ M</h1>
</div>
  </section>
);

export default Footer;
