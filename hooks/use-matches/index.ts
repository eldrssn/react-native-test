import { fetchMatches } from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useMatches = () =>
  useQuery({ queryKey: ['matches'], queryFn: fetchMatches });
