"use server";

import { env } from "@/env";
import { type MailerData, SendgridTemplateIds } from "@/types/mail";
import mail from "@sendgrid/mail";

export const rsvp = async (data: MailerData) => {
  mail.setApiKey(env.SENDGRID_API_KEY);
  await mail.send([
    {
      to: env.SENDGRID_RECEIVER,
      from: env.SENDGRID_SENDER,
      templateId: SendgridTemplateIds.RSVP,
      dynamicTemplateData: {
        FirstName: data.firstName,
        LastName: data.lastName,
        Email: data.email,
        AttendeeCount: data.attendingCount,
        Message: data.message ?? "",
      },
    },
    {
      to: data.email,
      from: env.SENDGRID_SENDER,
      templateId: SendgridTemplateIds.RSVP,
      dynamicTemplateData: {
        FirstName: data.firstName,
        LastName: data.lastName,
        Email: data.email,
        AttendeeCount: data.attendingCount,
        Message: data.message ?? "",
      },
    },
  ]);
};
