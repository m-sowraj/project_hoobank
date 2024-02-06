import { apple, bill, google } from "../assets";
import { stats } from "../constants";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
    <div className={`sm:ml-10  flex-col mb-6`}>
  {stats.map((stat) => (
    <div key={stat.id} className={`w-full sm:w-auto flex justify-start items-center sm:flex-col sm:items-end m-3 sm:mb-2 sm:mt-10`} >
      <h4 className="font-poppins font-semibold xs:text-[90.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white sm:mb-7">
        {stat.value}
      </h4>
      <p className="font-poppins font-bold xs:text-[40.45px] text-[25.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3 sm:mb-5 sm:ml-0">
        {stat.title}
      </p>
    </div>
  ))}
</div>
</div>
  </section>
);

export default Billing;
