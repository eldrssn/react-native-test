import { FC } from 'react';
import TeamDivider from '@/components/ui/team-divider';
import { PropsType } from '../../types';
import { TeamDetails } from '../team-details';

export const DescriptionContent: FC<PropsType> = ({ item }) => {
  const { homeTeam, awayTeam } = item;

  return (
    <>
      <TeamDetails team={homeTeam} />
      <TeamDivider text="VS" />
      <TeamDetails team={awayTeam} />
    </>
  );
};
