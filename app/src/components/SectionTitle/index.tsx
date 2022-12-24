import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {colors} from '../../theme';

interface Props {
  title: string;
  children?: any;
}

const SectionTitle: FC<Props> = ({title, children}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity onPress={() => setIsActive(!isActive)}>
          <AntDesign
            name={isActive ? 'minus' : 'plus'}
            size={25}
            color={colors.light.primary}
          />
        </TouchableOpacity>
      </View>
      {isActive && children}
    </>
  );
};

export default SectionTitle;
