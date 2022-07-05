import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";

import { DEPARTMENTS } from "../../common/constants";
import TextEditor from "../../components/TextEditor";

function CreateProduct() {
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [publishedDate, setPublishedDate] = useState<Date>(new Date());
  const [headerImg, setHeaderImage] = useState<string>("");

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleSubtitleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSubTitle(e.target.value);
  const handleDepartmentInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDepartment(e.target.value);
  const handleDateChange = (newValue: Date | null) =>
    setPublishedDate(newValue as Date);
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
          <TextEditor body={body} setBody={setBody} />
        </LocalizationProvider>{" "}
      </section>
    </div>
  );
}

export default CreateProduct;
