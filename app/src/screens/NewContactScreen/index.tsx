import React from 'react';
import {View, FlatList} from 'react-native';

import {GoBack, MessageCard} from '../../components';
import ContactList from '../../components/ContactList';
import {useAppSelector} from '../../hooks/useRedux';
import styles from './styles';

const NewContactScreen = () => {
  const {creatorList} = useAppSelector(state => state.creator);
  return (
    <View style={styles.container}>
      <GoBack title="New contact" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={creatorList}
        renderItem={({item}) => <ContactList {...item} />}
      />
    </View>
  );
};

export default NewContactScreen;
