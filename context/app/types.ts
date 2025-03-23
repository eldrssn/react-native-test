import { ReactNode } from 'react';
import { Match, Status } from '@/models';

export interface AppContextType {
  matches: Match[];
  setMatches: (matches: Match[]) => void;
  setNewStatus: (status: Status) => void;
}

export interface AppProviderProps {
  children: ReactNode;
}
