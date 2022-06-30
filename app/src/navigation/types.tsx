export enum Type {
  Home = 'Home',
  Cart = 'Cart',
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
}

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  LoginWithPassword: undefined;

  Home: undefined;
  Course: undefined;
  Inbox: undefined;
  Cart: undefined;
  Profile: undefined;
  TopMentors: undefined;
  Main: undefined;
  MyBookmarks: undefined;
  MostPopularCourse: undefined;
  Search: undefined;
  ProfileUpdate: undefined;
  CourseDetails: {id: string};
};
