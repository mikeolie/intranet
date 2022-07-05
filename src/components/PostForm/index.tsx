import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Fab from "@mui/material/Fab";

import { IPostForm } from "../../common/types";
import TextEditor from "../TextEditor";
import { DEPARTMENTS } from "../../common/constants";

import "./styles.scss";

interface PostFormProps {
  formData: IPostForm;
  updateState: Function;
}

function PostForm({ formData, updateState }: PostFormProps) {
  const { title, subTitle, headerImg, department, publishedDate, body } =
    formData;
  const removeHeaderImg = () => updateState(null, "headerImg");
  const setBody = (content: string) => updateState(content, "body");
  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateState(e.target.value, "title");
  const handleSubtitleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateState(e.target.value, "subTitle");
  const handleDepartmentInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateState(e.target.value, "department");
  const handleDateChange = (newValue: Date | null) =>
    updateState(newValue, "publishedDate");
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList = e.target.files as FileList;
    const imgFile = files[0];
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) =>
      updateState(
        {
          file: imgFile,
          id: 0,
          src: e.target!.result as string,
        },
        "headerImg"
      );
    reader.readAsDataURL(imgFile);
  };
  const imgInput = headerImg ? (
    <article className="image-upload__container">
      <header>Header Image:</header>
      <img src={headerImg.src} alt={headerImg.src} />{" "}
      <span className="remove-img__btn" onClick={removeHeaderImg}>
        X
      </span>
    </article>
  ) : (
    <Fab color="primary" aria-label="Add Header Image">
      <input
        type="file"
        onChange={handleImageUpload}
        accept="image/*"
        style={{
          //make this hidden and display only the icon
          position: "absolute",
          top: "-35px",
          left: 0,
          height: "calc(100% + 36px)",
          width: "calc(100% + 5px)",
          outline: "none",
        }}
      />
      <AddPhotoAlternateIcon />
    </Fab>
  );
  return (
    <form id="post-form__container">
      <TextField label="Title" value={title} onChange={handleTitleInput} />
      <TextField
        label="Subtitle"
        value={subTitle}
        onChange={handleSubtitleInput}
      />
      <TextField
        select
        value={department}
        defaultValue={DEPARTMENTS[0]}
        label="Department"
        onChange={handleDepartmentInput}
      >
        {DEPARTMENTS.map((dept: string) => (
          <MenuItem key={dept} value={dept}>
            {dept}
          </MenuItem>
        ))}
      </TextField>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Published Date"
          inputFormat="MM/dd/yyyy"
          value={publishedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>{" "}
      {imgInput}
      <TextEditor body={body} setBody={setBody} />
    </form>
  );
}

export default PostForm;
