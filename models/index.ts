export type MatchStatus = 'Scheduled' | 'Ongoing' | 'Finished';

export interface Player {
  username: string;
  kills: number;
}

export interface Team {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
}

export interface Match {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
}

export type Status = string | null;
export interface Option {
  label: string;
  value: Status;
}
