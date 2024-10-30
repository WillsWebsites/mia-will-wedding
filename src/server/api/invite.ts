"use server";

import { db } from "@/server/db";
import { invites } from "@/server/db/schema";
import { type inviteSchema } from "@/validators/invite";
import { type z } from "zod";

export const createInvite = async (invite: z.infer<typeof inviteSchema>) => {
  await db.insert(invites).values(invite);
};
