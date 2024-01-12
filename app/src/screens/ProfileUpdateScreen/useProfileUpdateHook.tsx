import React, {useState} from 'react';
import {useAppSelector} from '../../hooks/useRedux';

const GanderData = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Others', value: 'others'},
];

export const useProfileUpdateHook = () => {
  const {data} = useAppSelector(state => state.user);
  const dateOfBirth = new Date(data?.user?.dateOfBirth);

  const [name, setName] = useState(data?.user?.fullName || '');
  const [isName, setIsName] = useState(false);

  const [email, setEmail] = useState(data?.user?.email || '');
  const [isEmail, setIsEmail] = useState(false);

  const [date, setDate] = useState(dateOfBirth || new Date());

  const [phone, setPhone] = useState(data?.user?.phoneNumber || '');
  const [isPhone, setIsPhone] = useState(false);

  const [gander, setGander] = useState(data?.user?.gender || 'others');
  const [isGander, setIsGander] = useState(false);

  return {
    GanderData,
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
  };
};
