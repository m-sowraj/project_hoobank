import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] shadow-md ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter1} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-bold text-dimblack text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimblack text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);


const Business = () =>  (
  <section id="features" className={layout.section}>
    {/* <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button styles={`mt-10`} />
    </div> */}


<div className="flex flex-col md:flex-row md:flex-wrap">
<h2 className={`${styles.heading2} text-gradient font-bold`}>
        SERVICES PROVIDED
       </h2>
  {features.map((feature, index) => (
    <div key={feature.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
      {/* Adjust the width based on the number of cards you want in a row */}
      <FeatureCard {...feature} index={index} />
    </div>
  ))}
</div>

  </section>
);

export default Business;
