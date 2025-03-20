import { List, Header } from '@components';
import styles from './styles.module.css';

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <Header />
      <List />
    </main>
  );
};
