export interface RestaurantReviews {
  reviewId: number;
  userId: number;
  userName: string;
  restaurantId: string;
  rating: number;
  review: string;
  likes: any[];
  comments: any[];
  deliveryAvailable: string;
  dineInAvailable: string;
  canEdit: boolean;
  canDelete: boolean;
  createdDate: string;
  timePast: number;
}
