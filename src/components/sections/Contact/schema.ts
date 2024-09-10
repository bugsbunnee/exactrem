import { z } from 'zod';

export const contactSchema = z.object({
	firstName: z.string().min(1, 'Please provide your first name').max(50),
	lastName: z.string().min(1, 'Please provide your last name').max(50),
	companyName: z.string().min(3, 'Company name must be at least 3 charaters').max(50, 'Company name must not be more than 50 charaters'),
	email: z.string().email(),
	country: z.string().min(3, 'Please select a valid country'),
	phoneNumber: z.string().min(5),
	message: z
		.string()
		.min(10, 'Please provide a message with at least 10 characters')
		.max(255),
});
