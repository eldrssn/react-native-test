import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  TouchableWithoutFeedback,
} from 'react-native';
import { Option } from '@/models';
import { ArrowSelectIcon } from '../icons/arrow-select-icon';
import { CustomSelectProps } from './types';
import { styles } from './styles';

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onSelect,
  placeholder = 'Выберите значение',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<Option | null>(null);

  const handleSelect = (item: Option) => {
    setSelectedValue(item);
    onSelect(item);
    setIsOpen(false);
  };

  const renderItem: ListRenderItem<Option> = ({ item }) => (
    <TouchableOpacity style={styles.option} onPress={() => handleSelect(item)}>
      <Text style={styles.option_text}>{item.label}</Text>
    </TouchableOpacity>
  );

  const handleOutsidePress = () => {
    setIsOpen(false);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.selectButton}
          onPress={() => setIsOpen(!isOpen)}
        >
          <Text style={styles.selectButton_text}>
            {selectedValue ? selectedValue.label : placeholder}
          </Text>
          <ArrowSelectIcon />
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.optionsList}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.label}
              renderItem={renderItem}
            />
          </View>
        )}
      </View>
      {isOpen && (
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

export default CustomSelect;
