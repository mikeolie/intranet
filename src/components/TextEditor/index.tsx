import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

import Button from "@mui/material/Button";

import { TINY_API_KEY } from "../../common/constants";

interface TextEditorProps {
  body: string;
  setBody: Function;
}

export default function TextEditor({ body, setBody }: TextEditorProps) {
  const editorRef: any = useRef();
  const saveContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      setBody(content, "body");
    }
  };
  return (
    <>
      <Editor
        onInit={(_evt, editor) => (editorRef.current = editor)}
        value={body}
        apiKey={TINY_API_KEY}
        init={{
          height: 500,
          menubar: false,
          plugins: ["", "", "insertdatetime"],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <Button
        variant="contained"
        sx={{ marginTop: 2, marginBottom: 2, width: "30%" }}
        onClick={saveContent}
      >
        Save Content
      </Button>
    </>
  );
}
