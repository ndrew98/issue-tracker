"use client";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root size="3" placeholder="Title" />
      <SimpleMDE placeholder="Description…" />
      <Button>Submit A New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
