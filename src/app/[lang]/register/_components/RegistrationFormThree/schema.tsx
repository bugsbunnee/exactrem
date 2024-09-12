import { z } from "zod";

export const registrationFormThreeSchema = z.object({
    referredBy: z.string().min('3', 'Invalid referral code'),
});

export type ReferralFormData = z.infer<typeof registrationFormThreeSchema>;
