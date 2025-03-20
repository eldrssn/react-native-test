import { STATUS_COLORS } from './constants';

export const getStatusColor = (statusValue: string) => {
  const status = statusValue.toLowerCase();

  if (Object.keys(STATUS_COLORS).includes(status)) {
    return STATUS_COLORS[status];
  }
};
