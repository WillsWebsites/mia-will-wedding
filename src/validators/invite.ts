import { z } from "zod";

export const inviteSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required.",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Invalid email address.",
    }),
  attendeeCount: z.string().min(1, {
    message: "Attendee count is required.",
  }),
  message: z.string().optional(),
});
