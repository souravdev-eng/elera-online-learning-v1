export interface UserBookMarksProps {
  title: string;
  category: string;
  ratingAvg: number;
  totalReview: number;
  totalStudent: number;
  originalPrice: number;
  price: number;
  image: string;
  id: string;
}
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
