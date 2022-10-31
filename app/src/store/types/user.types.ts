export interface UserDataProps {
  token: string;
  user: {
    email: string;
    fullName: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  };
}
