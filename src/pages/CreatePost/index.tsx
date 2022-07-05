import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Fab from "@mui/material/Fab";

import { DEPARTMENTS } from "../../common/constants";
import TextEditor from "../../components/TextEditor";
import { ImageState } from "../../common/types";

function CreateProduct() {
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [publishedDate, setPublishedDate] = useState<Date>(new Date());
  const [headerImg, setHeaderImage] = useState<ImageState>();

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleSubtitleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSubTitle(e.target.value);
  const handleDepartmentInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDepartment(e.target.value);
  const handleDateChange = (newValue: Date | null) =>
    setPublishedDate(newValue as Date);
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList = e.target.files as FileList;
    const imgFile = files[0];
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) =>
      setHeaderImage({
        file: imgFile,
        id: 0,
        src: e.target!.result as string,
      });
    reader.readAsDataURL(imgFile);
  };
  const imgInput = headerImg ? (
    <article>
      <header>Header Image: </header>
      <img src={headerImg.src as string} alt={headerImg.src} /> <span>X</span>
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
    <div>
      <section>
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
      </section>
    </div>
  );
}

export default CreateProduct;
