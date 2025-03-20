import { FC } from 'react';

import teamImg from '@images/team.png';
import { PropsType } from './types';
import { getStatusColor } from './utils';
import styles from './styles.module.css';

export const ListItem: FC<PropsType> = ({ item }) => {
  const { homeTeam, homeScore, awayTeam, awayScore, status } = item;

  const statusColor = getStatusColor(status);

  return (
    <article className={styles.wrapper}>
      <div className={styles.team}>
        <img className={styles.team_img} src={teamImg} alt="" />
        <p className={styles.team_name}>{homeTeam.name}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.score}>
          {homeScore} : {awayScore}
        </p>
        <p className={styles.status} style={{ background: statusColor }}>
          {status}
        </p>
      </div>
      <div className={styles.team}>
        <p className={styles.team_name}>{awayTeam.name}</p>
        <img className={styles.team_img} src={teamImg} alt="" />
      </div>
    </article>
  );
};
