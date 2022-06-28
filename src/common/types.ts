export interface POST {
  id: number;
  title: string;
  subtitle: string;
  department: string;
  header_img: string;
  body: string;
  is_archived: boolean;
  date_modified: string | Date;
  date_created: string | Date;
  publish_date: string | Date;
}

export interface WEATHER_RES {
  current_temp: number;
  icon_url: string;
  weather_description: string;
}
