"use client";
import React from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { TextField, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  // console.log(register("title"));

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues"); //redirect to issues page after submission
      })}
    >
      <TextField.Root size="3" placeholder="Title" {...register("title")} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description…" {...field} />
        )}
      />
      <Button type="submit">Submit A New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
