import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC, useState} from 'react';
import {colors, fonts_Family, fonts_Size} from '../../theme';

interface Props {
  title: string;
  onPress?: any;
  isActive?: boolean;
}

const FilterCard: FC<Props> = ({title, onPress, isActive}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={isActive ? styles.tagActive : styles.tag}
      onPress={onPress}>
      <Text style={isActive ? styles.tagActiveText : styles.tagText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterCard;

const styles = StyleSheet.create({
  tag: {
    borderWidth: 1.2,
    marginHorizontal: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    minWidth: 55,
    borderColor: colors.light.PrimaryLight,
    justifyContent: 'center',
  },
  tagText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.PrimaryLight,
    fontSize: fonts_Size.body,
  },
  tagActiveText: {
    fontFamily: fonts_Family.UrbanistSemiBold,
    color: colors.light.white,
    fontSize: fonts_Size.body,
  },
  tagActive: {
    marginHorizontal: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
    minWidth: 55,
    backgroundColor: colors.light.primary,
    justifyContent: 'center',
  },
});
