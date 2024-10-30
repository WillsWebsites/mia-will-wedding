export interface MailerData {
  firstName: string;
  lastName: string;
  email: string;
  attendingCount: string;
  message?: string;
}

export enum SendgridTemplateIds {
  RSVP = "d-b8df2e7d8e734a77bef5bf0b709df53e",
}
