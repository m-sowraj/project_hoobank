import styles from "../style";
import Button from "./Button";
import Button2 from "./Button2";

const CTA = () => (
  <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading3}>Let’s Connect!</h2>
      <p className={`${styles.paragraph}  mt-5`}>
      Don't hesitate to connect with us to inquire about our services and experience our top-notch products firsthand. Reach out today and unlock the potential of our exceptional solutions tailored to your needs.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-1 sm:mt-10 ml-0 sm:mt-0 mt-10`}>
      <Button2 />
    </div>
  </section>
);

export default CTA;
