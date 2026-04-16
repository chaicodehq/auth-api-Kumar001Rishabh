import * as z from 'zod';


const registerSchema = z.object({
    name: z.string().min(2).max(55).trim(),
    email: z.email(),
    password: z.string().min(6),
});

export default registerSchema;