export enum Type {
  Home = 'Home',
  Transactions = 'Transactions',
  Inbox = 'Inbox',
  Course = 'Course',
  Profile = 'Profile',
  TopMentors = 'TopMentors',
  Main = 'Main',
  MyBookmarks = 'MyBookmarks',
  MostPopularCourse = 'MostPopularCourse',
  Search = 'Search',
  Login = 'Login',
  Signup = 'Signup',
  LoginWithPassword = 'LoginWithPassword',

  ProfileUpdate = 'ProfileUpdate',
  CourseDetails = 'CourseDetails',
  Chat = 'Chat',
  Payment = 'Payment',
}

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  LoginWithPassword: undefined;

  Home: undefined;
  Course: undefined;
  Inbox: undefined;
  Transactions: undefined;
  Profile: undefined;
  TopMentors: undefined;
  Main: undefined;
  MyBookmarks: undefined;
  MostPopularCourse: undefined;
  Search: undefined;
  ProfileUpdate: undefined;
  CourseDetails: {id: string};
  Chat: undefined;
  Payment: undefined;
};

export type RootTabParamList = {
  Home: undefined;
  Course: undefined;
  Inbox: undefined;
  Transactions: undefined;
  Profile: undefined;
};
