enum CourseCategory {
  WebDevelopment = 'Web Development',
  Programing = 'Programing',
  UIUX = 'UI/UX',
  Design = '3D Design',
  WebDesign = 'Web Design',
  MobileDevelopment = 'Mobile Development',
  Photography = 'Photography',
  Illustration = 'Illustration',
  Animation = 'Animation',
}

export interface courseDetailsProps {
  title: string;
  introVideo: string;
  category: CourseCategory;
  ratingAvg: number;
  totalReview: number;
  totalStudent: number;
  originalPrice: number;
  price: number;
  creatorId: any;
  durationHours: number;
  lessons: { title: string; videos: [{ title: string; videoUrl: string }] }[];
  aboutCourse: string;
  preRequisite: string[];
  image: string;
  id: any;
}

export interface MyCourseInterface {
  course: {
    title: string;
    category: string;
    creatorId: string;
    durationHours: number;
    lessons: {
      title: string;
      videos: { title: string; videoUrl: string }[];
    }[];

    image: string;
    id: string;
  };
}
