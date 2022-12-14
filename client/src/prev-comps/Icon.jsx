import styles from './Icon.module.css';

export default function Icon(props) {
  function handleMouseEnter() {
    props.setCurrent(props.item);
  }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      className={props.current ? styles.IconHovered : styles.Icon}
      style={{ backgroundImage: `URL(./images/${props.item}.jpg)` }}
    >
      {/* <img src={'./images/' + props.item + '.jpg'} alt="" className={styles.image} /> */}
    </div>
  );
}
