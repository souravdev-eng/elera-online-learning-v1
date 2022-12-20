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
import {ViewAll, CourseCard, FilterCard} from '../../components';
import {Tags} from '../../assets/data/tagData';
import {useHomeHook} from './hooks/useHomeHooks';
import {Icons} from '../../theme';
import styles from './styles';

const HomeScreen: React.FC = () => {
  const {
    data,
    courseList,
    navigation,
    creatorList,
    navigateToCourseDetail,
    navigateToCreatorProfile,
  } = useHomeHook();

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
              <Text style={styles.userName}>{data?.user?.fullName}</Text>
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
            <Image style={styles.icon} source={Icons.Search} />
            <TextInput
              style={styles.searchBar}
              placeholder="Search"
              onFocus={() => navigation.navigate('Search')}
            />
          </View>
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
          data={creatorList}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.userCard}
              onPress={() => navigateToCreatorProfile(item?.id)}>
              <Image
                source={{uri: item.profileImage}}
                style={styles.userNameCardImage}
              />
              <Text style={styles.userNameCardText} numberOfLines={1}>
                {item.nickName}
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
            {courseList.map((el, index) => (
              <CourseCard
                {...el}
                key={index}
                onPress={() => navigateToCourseDetail(el.id)}
                onBookmarkPress={() => {}}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
