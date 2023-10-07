export interface UserDataProps {
  token: string;
  user: {
    email: string;
    fullName: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    id: string;
    dateOfBirth: any;
    phoneNumber: string;
    gender: string;
    profileImage?: string;
  };
}
