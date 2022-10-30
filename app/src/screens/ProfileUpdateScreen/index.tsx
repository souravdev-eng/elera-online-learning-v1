import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Dropdown} from 'react-native-element-dropdown';

import AppTextInput from '../../global/AppTextInput';
import {colors, Icons} from '../../theme';
import styles from './styles';

import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {useAppNavigation} from '../../hooks/useAppNavigation';
import {useProfileUpdateHook} from './useProfileUpdateHook';

const ProfileUpdateScreen = () => {
  const {handelGoBack, navigation} = useAppNavigation();
  // const {user} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const currentDate = new Date();
  const [open, setOpen] = useState(false);

  const {
    data,
    name,
    isName,
    email,
    isEmail,
    date,
    phone,
    isPhone,
    gander,
    isGander,
    setName,
    setIsName,
    setEmail,
    setIsEmail,
    setDate,
    setPhone,
    setIsPhone,
    setGander,
    setIsGander,
  } = useProfileUpdateHook();

  interface IconProps {
    isIconActive: boolean;
    icon: any;
  }

  const Icon = ({isIconActive, icon}: IconProps) => {
    return (
      <Image
        source={icon}
        style={[
          styles.icon,
          {tintColor: isIconActive ? colors.light.primary : colors.light.grey1},
        ]}
      />
    );
  };

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

        <AppTextInput isActive={isName} row>
          <TextInput
            placeholder="Nick Name"
            style={styles.textInput}
            value={name}
            onChangeText={t => setName(t)}
            onFocus={() => setIsName(true)}
            onBlur={() => setIsName(false)}
          />
          <Icon icon={Icons.Person} isIconActive={isEmail} />
        </AppTextInput>

        <AppTextInput isActive={open} row>
          <View>
            <Text style={styles.text}>
              {date.getTime() < currentDate.getTime()
                ? date.toLocaleDateString()
                : 'Date of Birth'}
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
          </View>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Icon icon={Icons.Calendar} isIconActive={open} />
          </TouchableOpacity>
        </AppTextInput>

        <AppTextInput isActive={isEmail} row>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            value={email}
            onChangeText={t => setEmail(t)}
            onFocus={() => setIsEmail(true)}
            onBlur={() => setIsEmail(false)}
            keyboardType={'email-address'}
          />
          <Icon icon={Icons.EmailOutline} isIconActive={isEmail} />
        </AppTextInput>

        <AppTextInput isActive={isPhone} row>
          <TextInput
            placeholder="Phone Number"
            style={styles.textInput}
            value={phone}
            onChangeText={t => setPhone(t)}
            onFocus={() => setIsPhone(true)}
            onBlur={() => setIsPhone(false)}
            keyboardType={'number-pad'}
          />
          <Icon icon={Icons.Call} isIconActive={isPhone} />
        </AppTextInput>
        <AppTextInput isActive={isGander}>
          <Dropdown
            style={styles.inputWarper}
            placeholderStyle={styles.dropDownText}
            selectedTextStyle={styles.textInput}
            data={data}
            labelField="label"
            valueField="value"
            placeholder={!isGander ? 'Select Gender' : '...'}
            value={gander}
            onFocus={() => setIsGander(true)}
            onBlur={() => setIsGander(false)}
            onChange={item => {
              setGander(item.value);
              setIsGander(false);
            }}
            renderRightIcon={() => (
              <Icon icon={Icons.ChevronDown} isIconActive={isGander} />
            )}
          />
        </AppTextInput>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileUpdateScreen;
