const url: string =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:8000/intranet"
    : "https://infinity.rctvpact.com/intranet";

export default url;

