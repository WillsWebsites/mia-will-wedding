export interface MailerData {
  firstName: string;
  lastName: string;
  email: string;
  attendingCount: string;
  message?: string;
}

export enum SendgridTemplateIds {
  RSVP = "d-6159a4b0b1d7487abf5bc98a4c0c634b",
}
