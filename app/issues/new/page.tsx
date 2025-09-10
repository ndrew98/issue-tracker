"use client";
import React, { useState } from "react";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { TextField, Button, Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import issueSchema from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/component/ErrorMessage";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

// interface IssueForm {
//   title: string;
//   description: string;
// }

//automatically infer the form type from zod schema(generating the interface  automatically )
type IssueForm = z.infer<typeof issueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(issueSchema),
  });
  const [error, setError] = useState("");
  // console.log(register("title"));

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-4">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="max-w-xl space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues"); //redirect to issues page after submission
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (error) {
            setError("An unexpected error occurred.");
          }
        })}
      >
        <TextField.Root size="3" placeholder="Title" {...register("title")} />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description…" {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button type="submit">Submit A New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
