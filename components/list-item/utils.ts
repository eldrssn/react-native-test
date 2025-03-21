import { STATUS_COLORS, StatusColorKey } from './constants';

const isStatusColorKey = (key: string): key is StatusColorKey => {
  return Object.keys(STATUS_COLORS).includes(key);
};

export const getStatusColor = (statusValue: string): string | undefined => {
  const status = statusValue.toLowerCase();

  if (isStatusColorKey(status)) {
    return STATUS_COLORS[status];
  }
};
