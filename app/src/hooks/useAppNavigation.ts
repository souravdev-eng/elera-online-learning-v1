import React from 'react';
import {useNavigation, CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';

export type Props = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackParamList>,
  StackNavigationProp<RootStackParamList>
>;

export const useAppNavigation = () => {
  const navigation = useNavigation<Props>();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return {navigation, handleGoBack};
};
