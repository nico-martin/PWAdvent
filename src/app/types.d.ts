import dayjs from '@utils/dayjs';

export interface ApiImage {
  sizes: Record<
    string,
    {
      url: string;
      width: number;
      height: number;
    }
  >;
  placeholder: string;
  alt: string;
  title: string;
}

interface Author {
  name: string;
  image: {
    src: string;
    width: number;
  };
  twitter: string;
  devto: string;
  webdev: string;
  personal: string;
}

export interface DayData {
  date: dayjs.Dayjs;
  title: string;
  excerpt: string;
  content: string;
  author?: Author;
  image: ApiImage;
}

export interface Day {
  loading: boolean;
  error: string;
  active: boolean;
  data: DayData;
}
