CREATE TABLE `invites` (
	`first_name` text(256),
	`last_name` text(256),
	`email` text(256),
	`attendee_count` integer,
	`message` text(256)
);
--> statement-breakpoint
DROP TABLE `foo`;