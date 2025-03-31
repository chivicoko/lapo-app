import { z } from "zod";

// Registeration
export const registerSchema = z.object({
  fee_name: z.string().min(1, { message: "Fee name is required!" }),
  value: z.number().min(1, { message: "Amount has to be at least 1 digits!" }),
  account: z.number().min(10, { message: "Account number has to be at least 10 digits!" }),
});


export type RegisterType = z.infer<typeof registerSchema>;