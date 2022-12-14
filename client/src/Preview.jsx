import { useState } from 'react';
import styles from './Preview.module.css';
import Icon from './prev-comps/Icon.jsx';

const imageList = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

export default function Preview(props) {
  const [list, setList] = useState(imageList);
  const [current, setCurrent] = useState('A');
  return (
    <div className={styles.previewCollumn}>
      <div className={styles['icon-collumn']}>
        {list.map((item) => (
          <Icon key={item} item={item} setCurrent={setCurrent} />
        ))}
      </div>
      <div className={styles['main-preview']} style={{ backgroundImage: `url(/images/${current}.jpg)` }}></div>
    </div>
  );
}
