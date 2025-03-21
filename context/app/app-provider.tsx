import { FC, useEffect, useMemo, useState } from 'react';

import { useMatches } from '@/hooks/use-matches';
import { Match } from '@/models';
import { useWebSocket } from '@/hooks/use-websocket';
import { AppProviderProps } from './types';
import { AppContext } from './app-context';

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const { data, error } = useMatches();
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    if (!data) return;

    setMatches(error ? [] : data);
  }, [data, setMatches, error]);

  useWebSocket((data) => {
    setMatches(data as Match[]);
  });

  const value = useMemo(() => ({ matches, setMatches }), [matches]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
