import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const SectionTitle = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Section 1 - Introduction</Text>
      <View>
        <Text style={styles.sectionTime}>60 mins</Text>
      </View>
    </View>
  );
};

export default SectionTitle;
