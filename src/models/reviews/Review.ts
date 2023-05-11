class Review {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;

  constructor(
    author_name?: string,
    author_url?: string,
    language?: string,
    original_language?: string,
    profile_photo_url?: string,
    rating?: number,
    relative_time_description?: string,
    text?: string,
    time?: number,
    translated?: boolean
  ) {
    this.author_name = author_name!;
    this.author_url = author_url!;
    this.language = language!;
    this.original_language = original_language!;
    this.profile_photo_url = profile_photo_url!;
    this.rating = rating!;
    this.relative_time_description = relative_time_description!;
    this.text = text!;
    this.time = time!;
    this.translated = translated!;
  }
}

export default Review;
