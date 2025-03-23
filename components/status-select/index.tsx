import React from 'react';

import { Option } from '@/models';
import { options } from './constants';
import CustomSelect from '../ui/custom-select';
import { useAppContext } from '@/hooks/use-app-context';

const StatusSelect: React.FC = ({}) => {
  const { setNewStatus } = useAppContext();
  const handleSelect = (item: Option) => {
    setNewStatus(item.value);
  };

  return <CustomSelect options={options} onSelect={handleSelect} />;
};

export default StatusSelect;
