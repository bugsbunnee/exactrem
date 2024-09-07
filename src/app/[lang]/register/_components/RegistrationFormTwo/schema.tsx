import { z } from "zod";

export const registrationFormTwoSchema = z.object({
	firstName: z.string().min(3, 'Please enter your first name'),
	lastName: z.string().min(3, 'Please enter your last name'),
    businessName: z.string().optional(),
    promotions: z.boolean().default(false),
    email: z.string().email(),
});

export type UserFormData = z.infer<typeof registrationFormTwoSchema>;
