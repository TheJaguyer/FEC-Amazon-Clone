import styles from './Info.module.css';

export default function Info() {
  return (
    <div className={styles.infoColumn}>
      <div className={styles.title}>Microsoft Elite Series 2 Controller - Starter Bundle</div>
      <a
        className={styles.brand}
        href="https://smile.amazon.com/Microsoft/b/ref=bl_dp_s_web_19823613011?ie=UTF8&node=19823613011&field-lbr_brands_browse-bin=Microsoft"
      >
        Brand: Microsoft
      </a>
      <div className={styles.dataBar}>
        rating stars | <a>2,432 ratings</a> | <a>33 answered questions</a>
      </div>
      <div className={styles.price}>
        <span className={styles.dollarSign}>$</span>
        <span className={styles.priceDollars}>218</span>
        <span classNAme={styles.priceCents}>99</span>
      </div>
      <div>Drop down with payment plans info</div>
      <div>table with info</div>
      <div>About this item</div>
      <div>bulleted list of details for size 14</div>
      <div> Report incorrect product information. (starts with comment icon) </div>
    </div>
  );
}
