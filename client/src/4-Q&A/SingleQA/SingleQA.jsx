import styles from './SingleQA.module.css';

export default function SingleQA(props) {
  return (
    <div className={styles['QA']}>
      <div className={styles['voting-section']}>
        <div className={styles['up-arrow']}></div>
        <div className={styles['vote-count']}>{`11`}</div>
        <div className={styles['votes-word']}>votes</div>
        <div className={styles['down-arrow']}></div>
      </div>
      <div className={styles['QA-section']}>
        <div className={styles['question']}>
          <div className={styles['declarative']}>Question:</div>
          <div className={styles['question-text']}>{`question text`}</div>
        </div>
        <div className={styles['answer']}>
          <div className={styles['declarative']}>Answer:</div>
          <div className={styles['answer-text']}>{`answer text`}</div>
        </div>
        <div className={styles['date-section']}>
          <div className={styles['declarative']}></div>
          <div className={styles['data-info']}>{`data info`}</div>
        </div>
      </div>
    </div>
  );
}
