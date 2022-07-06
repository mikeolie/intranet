export type Departments =
  | "All"
  | "Call Center"
  | "PACT"
  | "Marketing"
  | "Production"
  | "Warehouse & Shipping";

export interface POST {
  id: number;
  title: string;
  subtitle: string;
  department: Departments;
  header_img: string;
  body: string;
  is_archived: boolean;
  date_modified: string | Date;
  date_created: string | Date;
  publish_date: string | Date;
}

export interface POST_REQUEST {
  title: string;
  subtitle: string;
  department: Departments;
  header_img: string;
  body: string;
  is_archived: boolean;
  date_modified: string | Date;
  publish_date: string | Date;
  date_created: string | Date;
}

export interface WEATHER_RES {
  current_temp: number;
  icon_url: string;
  weather_description: string;
}

export interface REACT_POST {
  data: POST;
}

export interface ImageState {
  file: File;
  id: number;
  src: string;
}

export interface IPostForm {
  title: string;
  subTitle: string;
  department: Departments;
  body: string;
  publishedDate: string | Date;
  headerImg: ImageState | null;
}
