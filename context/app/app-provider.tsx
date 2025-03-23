import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { useMatches } from '@/hooks/use-matches';
import { Match, Status } from '@/models';
import { useWebSocket } from '@/hooks/use-websocket';
import { AppProviderProps } from './types';
import { AppContext } from './app-context';

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const { data, error } = useMatches();
  const [originalMatches, setOriginalMatches] = useState<Match[]>([]);
  const [currentStatus, setCurrentStatus] = useState<Status>(null);

  useEffect(() => {
    if (!data) return;
    setOriginalMatches(error ? [] : data);
  }, [data, error]);

  useWebSocket((data) => {
    setOriginalMatches(data as Match[]);
  });

  const matches = useMemo(() => {
    if (!currentStatus) return originalMatches;
    return originalMatches.filter((el) => el.status === currentStatus);
  }, [originalMatches, currentStatus]);

  const setNewStatus = useCallback((status: Status) => {
    setCurrentStatus(status);
  }, []);

  const value = useMemo(
    () => ({
      matches,
      setMatches: setOriginalMatches,
      setNewStatus,
    }),
    [matches, setNewStatus],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
