import * as z from "zod";


const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(6)
});

export default loginSchema;