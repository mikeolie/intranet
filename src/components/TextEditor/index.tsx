import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { TINY_API_KEY } from "../../common/constants";

interface TextEditorProps {
  body: string;
  setBody: Function;
}

export default function TextEditor({ body, setBody }: TextEditorProps) {
  const editorRef: any = useRef();
  const log = () => {
    if (editorRef.current) {
      // set content here
      const content = editorRef.current.getContent();
      setBody(content, 'body');
    }
  };
  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        value={body}
        apiKey={TINY_API_KEY}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}
