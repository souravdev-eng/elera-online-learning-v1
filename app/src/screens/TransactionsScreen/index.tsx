import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {LogoHeader} from '../../components';

const TransactionsScreen = () => {
  return (
    <>
      <LogoHeader title="Transactions" isSearch style={{paddingBottom: 10}} />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        contentContainerStyle={{backgroundColor: '#FFFFFF'}}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.container} activeOpacity={1}>
            <View style={{overflow: 'hidden'}}>
              <Image
                source={{uri: 'https://i.imgur.com/oN8yGGA.jpg'}}
                resizeMode="cover"
                style={styles.courseImage}
              />
            </View>
            <View style={{width: '40%', marginLeft: 12}}>
              <Text style={styles.title} numberOfLines={2}>
                React Native ZTM
              </Text>
              <View style={styles.tagContainer}>
                <Text style={styles.tagText} numberOfLines={1}>
                  Paid
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.receiptButton}>
              <Text style={styles.receiptButtonText}>E-Receipt</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default TransactionsScreen;
