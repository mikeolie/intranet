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
