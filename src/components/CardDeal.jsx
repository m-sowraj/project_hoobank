import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="product1" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Browse The
Complete Range Of  Our Premium Products
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Explore our extensive selection of premium WEB and MOBILE application, crafted to meet diverse industrial needs.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
