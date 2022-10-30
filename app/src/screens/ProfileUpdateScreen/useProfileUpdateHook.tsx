import React, {useState} from 'react';

const data = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Others', value: 'others'},
];

export const useProfileUpdateHook = () => {
  const [name, setName] = useState('');
  const [isName, setIsName] = useState(false);

  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);

  const [date, setDate] = useState(new Date());

  const [phone, setPhone] = useState('');
  const [isPhone, setIsPhone] = useState(false);

  const [gander, setGander] = useState(null);
  const [isGander, setIsGander] = useState(false);

  return {
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
  };
};
