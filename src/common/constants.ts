import { Departments, IPostForm } from "./types";

export const DEPARTMENTS: Array<Departments> = [
  "All",
  "Call Center",
  "PACT",
  "Marketing",
  "Production",
  "Warehouse & Shipping",
];

export const TINY_API_KEY = "3jw30o6qou2t146opq5vrdacq833a6vzq376j91iwq4etpav";

export const INITIAL_POST_FORM: IPostForm = {
  title: "",
  subTitle: "",
  headerImg: null,
  department: DEPARTMENTS[0],
  body: "",
  publishedDate: new Date(),
};
