import { AccountType } from "@/utils/constants";
import { z } from "zod";

export const registrationFormOneSchema = z.object({
	country: z.string().min(3, 'Please select a valid country'),
    phoneNumber: z.string().min(4),
    accountType: z.enum([AccountType.INDIVIDUAL, AccountType.CORPORATE]),
});

export type RegistrationFormData = z.infer<typeof registrationFormOneSchema>;
