import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Icons} from '../../theme';
import {ViewAll} from '../../components';

const SearchScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [recentSearch, setRecentSearch] = useState<string[]>([]);

  const handleSubmit = (event: any) => {
    setRecentSearch([...recentSearch, event.nativeEvent.text]);
    setSearch(event.nativeEvent.text);
    setSearch('');
  };

  const handleRemove = (text: string) => {
    setRecentSearch(recentSearch.filter(item => item !== text));
  };

  const handleClear = () => {
    setRecentSearch([]);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#fff'}}>
      <View style={styles.searchContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Image style={styles.icon} source={Icons.Search} />
          </TouchableOpacity>
          <TextInput
            value={search}
            autoFocus={true}
            style={styles.searchBar}
            placeholder="Search"
            returnKeyType="search"
            onChangeText={t => setSearch(t)}
            onSubmitEditing={event => handleSubmit(event)}
          />
        </View>
        <TouchableOpacity>
          <Image style={styles.filterIcon} source={Icons.FilterOutline} />
        </TouchableOpacity>
      </View>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <ViewAll title="Recent" subtitle="Clear All" onPress={handleClear} />

        <View style={styles.line} />

        {recentSearch?.map((item, index) => (
          <TouchableOpacity style={styles.reaccentContainer} key={index}>
            <Text style={styles.reaccentText}>{item}</Text>
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => handleRemove(item)}>
              <Image source={Icons.Close} style={styles.icon} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
