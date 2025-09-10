import {z} from "zod";

const issueSchema = z.object({
  title: z.string().min(5, "Title is required and must be at least 5 characters").max(100),
  description: z.string().min(1, "Description is required and must be at least 5 characters" ).max(1000),
})
export default issueSchema;