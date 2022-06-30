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
import ViewAll from '../../components/ViewAll';

const SearchScreen = () => {
  const [search, setSearch] = useState<string>('');
  const [recentSearch, setRecentSearch] = useState<string[]>([]);

  const handelSubmit = (event: any) => {
    setRecentSearch([...recentSearch, event.nativeEvent.text]);
    setSearch(event.nativeEvent.text);
    setSearch('');
  };

  const handelRemove = (text: string) => {
    setRecentSearch(recentSearch.filter(item => item !== text));
  };

  const handelClear = () => {
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
            onSubmitEditing={event => handelSubmit(event)}
          />
        </View>
        <TouchableOpacity>
          <Image style={styles.filterIcon} source={Icons.FilterOutline} />
        </TouchableOpacity>
      </View>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <ViewAll title="Recent" subtitle="Clear All" onPress={handelClear} />

        <View style={styles.line} />

        {recentSearch?.map((item, index) => (
          <TouchableOpacity style={styles.reaccentContainer} key={index}>
            <Text style={styles.reaccentText}>{item}</Text>
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => handelRemove(item)}>
              <Image source={Icons.Close} style={styles.icon} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
