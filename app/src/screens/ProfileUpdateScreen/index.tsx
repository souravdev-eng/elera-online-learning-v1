import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './styles';
import {Icons} from '../../theme';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';

const data = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Others', value: '3'},
];

const ProfileUpdateScreen = () => {
  const {handelGoBack, navigation} = useAppNavigation();
  const {user} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(user?.data.token);
  }, []);

  const currentDate = new Date();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#fff'}}>
      <View style={styles.headerWarper}>
        <TouchableOpacity onPress={handelGoBack}>
          <Image source={Icons.ArrowBack} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Fill your profile</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <Image
            source={Icons.DefaultUser}
            style={styles.userIcon}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.edit}>
            <Image source={Icons.Edit} style={styles.editIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.inputWarper}>
          <TextInput placeholder="Full Name" style={styles.textInput} />
        </View>
        <View style={styles.inputWarper}>
          <TextInput placeholder="Nick Name" style={styles.textInput} />
        </View>
        <TouchableOpacity
          style={[styles.inputWarper, styles.row]}
          onPress={() => setOpen(true)}>
          <Text style={styles.text}>
            {date.getTime() < currentDate.getTime()
              ? date.toLocaleDateString()
              : ' Date of Birth'}
          </Text>
          <DatePicker
            maximumDate={new Date()}
            modal
            open={open}
            date={date}
            mode={'date'}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <Image source={Icons.Calendar} style={styles.icon} />
        </TouchableOpacity>
        <View style={[styles.inputWarper, styles.row]}>
          <TextInput placeholder="Email" style={styles.textInput} />
          <Image source={Icons.EmailOutline} style={styles.icon} />
        </View>
        <View style={styles.inputWarper}>
          <TextInput placeholder="Phone Number" style={styles.textInput} />
        </View>
        <Dropdown
          style={styles.inputWarper}
          placeholderStyle={styles.text}
          selectedTextStyle={styles.textInput}
          data={data}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderRightIcon={() => (
            <Image
              source={Icons.ChevronDown}
              style={[styles.icon, {marginRight: 10}]}
            />
          )}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileUpdateScreen;
