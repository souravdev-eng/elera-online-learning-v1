export interface CourseCardProps {
  title: string;
  category: string;
  ratingAvg: number;
  totalReview: number;
  originalPrice: number;
  price: number;
  image: string;
  id: string;
  totalStudent: number;
  onPress?: () => void;
  onBookmarkPress?: () => void;
  bookMarked: Boolean
}
