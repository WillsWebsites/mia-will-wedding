// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator(
  (name) => `mia-will-wedding_${name}`,
);

export const invites = createTable(
  "invite",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    firstName: text("first_name", { length: 256 }),
    lastName: text("last_name", { length: 256 }),
    createdAt: int("created_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: int("updated_at", { mode: "timestamp" }).$onUpdate(
      () => new Date(),
    ),
  },
  (invite) => ({
    nameIndex: index("name_idx").on(invite.firstName, invite.lastName),
  }),
);
