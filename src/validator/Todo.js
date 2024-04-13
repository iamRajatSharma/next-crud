import { z } from "zod";

const TodoValidator = z.object({
    title: z.string().min(4),
    description: z.string().min(4),
    status: z.enum(['Complete', "In-Complete"])

})

export default TodoValidator;