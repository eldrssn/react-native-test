import { useAppContext, useMatches } from '@hooks';
import { ListItem } from '@components';
import styles from './styles.module.css';

export const List = () => {
  const { matches } = useAppContext();
  const { isFetching, isLoading } = useMatches();

  return (
    <section
      className={`${styles.section} ${
        isFetching ? styles.section_blurred : ''
      }`}
    >
      {!isLoading &&
        matches.map((item, index) => <ListItem item={item} key={index} />)}

      {!isLoading && !matches.length && (
        <div className={styles.infoBox}>
          <p className={styles.infoText}>Матчи отсутствуют, попробуйте позже</p>
        </div>
      )}

      {isLoading && (
        <div className={styles.infoBox}>
          <p className={styles.infoText}>Загрузка...</p>
        </div>
      )}
    </section>
  );
};
