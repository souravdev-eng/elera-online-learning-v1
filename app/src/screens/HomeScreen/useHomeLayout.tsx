import React from 'react';
import { TouchableOpacity, Image, TextInput, View } from 'react-native';
import { useHomeHook } from './hooks/useHomeHooks';
import { Icons } from '../../theme';
import styles from './styles';

export const useHomeLayout = () => {
  const { navigation } = useHomeHook();

  const renderNotification = () => (
    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
      <Image source={Icons.BellOutline} style={styles.icon} />
    </TouchableOpacity>
  );

  const renderCart = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('MyBookmarks')}>
      <Image source={Icons.CartOutline} style={styles.icon} />
    </TouchableOpacity>
  );

  const renderBookMark = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('MyBookmarks')}>
      <Image source={Icons.BookmarkOutline} style={styles.icon} />
    </TouchableOpacity>
  );

  const renderSearchBar = () => (
    <View style={styles.searchContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image style={styles.icon} source={Icons.Search} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          onFocus={() => navigation.navigate('Search')}
        />
      </View>
    </View>
  );

  return { renderNotification, renderBookMark, renderSearchBar, renderCart };
};
