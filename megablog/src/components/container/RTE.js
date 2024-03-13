import { Controller } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import React from "react";

function RTE({ name, defaultValue, control, }) {
  return (
    <div>
      <Controller
        control={control}
        name={name || "content"}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            apiKey="gs2gjcn393oj5j0us994os41ibjj9m8h914cm9inccvrfi6p"
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
export default RTE;
