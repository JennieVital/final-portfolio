import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().max(120),
  details: z.string().min(1),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    // TODO: Replace this console.log with a secure email provider integration.
    console.log("Contact form submission:", data);

    return { success: true };
  });
