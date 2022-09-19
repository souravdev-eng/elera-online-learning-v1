import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {FC, useState} from 'react';
import {colors, fonts_Family, fonts_Size} from '../../theme';

interface Props {
  title: string;
  onPress?: any;
  isActive?: boolean;
  star?: boolean;
  style?: any;
}

const FilterCard: FC<Props> = ({title, onPress, isActive, star, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        style,
        isActive ? styles.tagActive : styles.tag,
        star ? styles.starContainer : null,
      ]}
      onPress={onPress}>
      {star && (
        <Ionicons
          name="star"
          size={14}
          style={{marginRight: 2}}
          color={isActive ? colors.light.white : colors.light.primary}
        />
      )}
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
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
});
