import { FC, useEffect, useMemo, useState } from 'react';

import { AppProviderProps } from './types';
import { AppContext } from './app-context';
import { useMatches } from '@/hooks/use-matches';
import { Match } from '@/models';

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const { data, error } = useMatches();
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    if (!data) return;

    setMatches(error ? [] : data);
  }, [data, setMatches, error]);

  const value = useMemo(() => ({ matches, setMatches }), [matches]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
