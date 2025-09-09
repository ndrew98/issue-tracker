import {z} from "zod";

const issueSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(100),
  description: z.string().min(5).max(1000),
})
export default issueSchema;