import { ReactNode } from 'react';

import { Match } from '@models';

export interface AppContextType {
  matches: Match[];
  setMatches: (matches: Match[]) => void;
}

export interface AppProviderProps {
  children: ReactNode;
}
