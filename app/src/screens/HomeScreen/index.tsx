import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Icons} from '../../theme';
import styles from './styles';

import ViewAll from '../../components/ViewAll';
import CourseCard from '../../components/CourseCard';
import FilterCard from '../../components/FilterCard';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {CourseListData} from '../../assets/data/courseList.data';
import {MentorsListData} from '../../assets/data/mentorsList.data';
import {Tags} from '../../assets/data/tagdata';

const HomeScreen: React.FC = () => {
  const {navigation} = useAppNavigation();

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1, backgroundColor: '#FCFCFC'}}>
      <View style={styles.container}>
        {/* Heder wrapper */}
        <View style={styles.userHeaderWrapper}>
          <View style={{flexDirection: 'row', width: '70%'}}>
            <Image source={Icons.User1} style={styles.userImage} />
            <View>
              <Text style={styles.gridText}>Good Morning 👋</Text>
              <Text style={styles.userName}>Sourav Majumdar</Text>
            </View>
          </View>
          <View style={styles.iconWrapper}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('MyBookmarks')}>
              <Image source={Icons.BookmarkOutline} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={Icons.BellOutline} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Image style={styles.icon} source={Icons.Search} />
            </TouchableOpacity>
            <TextInput style={styles.searchBar} placeholder="Search" />
          </View>
          <TouchableOpacity>
            <Image style={styles.filterIcon} source={Icons.FilterOutline} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.bannerContainer} />

        <ViewAll
          style={styles.viewAllContainer}
          title="Top Mentors"
          onPress={() => navigation.navigate('TopMentors')}
        />
        <FlatList
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{flexGrow: 0}}
          data={MentorsListData}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={0.7} style={styles.userCard}>
              <Image
                source={{uri: item.image}}
                style={styles.userNameCardImage}
              />
              <Text style={styles.userNameCardText} numberOfLines={1}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(_, idx) => idx.toString()}
        />
        <View style={{marginTop: 22}}>
          <ViewAll
            style={styles.viewAllContainer}
            title="Most Popular Course"
            onPress={() => navigation.navigate('MostPopularCourse')}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Tags}
            style={{marginBottom: 12}}
            renderItem={({item}) => (
              <FilterCard
                title={item}
                isActive={item === 'All' ? true : false}
              />
            )}
            keyExtractor={(_, idx) => idx.toString()}
          />
          <View style={{alignItems: 'center'}}>
            {CourseListData.map((el, index) => (
              <CourseCard {...el} key={index} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
