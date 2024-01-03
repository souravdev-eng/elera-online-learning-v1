interface creatorDetailsProps {
  bio: string;
  nickName: string;
  profileImage: string;
  id: string;
  email: 'mumshadmannambeth@gmail.com';
  phoneNumber: '2222222222';
  dialCode: '+21';
  role: 'creator';
  totalStudent: 0;
  totalCourse: 0;
  totalReviews: 0;
  dateOfBirth: '1888-12-04T18:38:50.000Z';
  gender: 'male';
}

interface CreatorProp {
  bio: string;
  nickName: string;
  profileImage: string;
  id: string;
}

export interface CreatorStateProps {
  creatorList: CreatorProp[];
  creatorDetails: creatorDetailsProps | null;
  loading: boolean;
  error: any;
}
