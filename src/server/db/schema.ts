import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const invites = sqliteTable("invites", {
  firstName: text("first_name", { length: 256 }),
  lastName: text("last_name", { length: 256 }),
  email: text("email", { length: 256 }),
  attendeeCount: text("attendee_count", { length: 256 }),
  message: text("message", { length: 256 }),
});
