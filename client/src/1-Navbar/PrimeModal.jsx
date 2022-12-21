import styles from './Navbar.module.css';

export default function PrimeModal(props) {
  return (
    <div className={styles['prime-modal']} style={{ top: `${props.top}px`, left: props.left }}>
      <div className={styles.arrow}>
        <div className={styles.arrowInner}></div>
      </div>
      <div className={styles['prime-img']}></div>
    </div>
  );
}
