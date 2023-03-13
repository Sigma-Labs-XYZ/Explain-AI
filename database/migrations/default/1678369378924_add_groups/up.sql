CREATE TABLE "public"."group" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "description" text, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."group_memberships" ("group_id" uuid NOT NULL, "topic_slug" text NOT NULL, PRIMARY KEY ("group_id","topic_slug") , UNIQUE ("group_id", "topic_slug"));

INSERT INTO "public"."group"("id", "name", "description") VALUES (E'1666b56d-e30b-47c5-81a6-a78f77f14ed7', E'WebDev',E'this is a test group');

INSERT INTO "public"."group_memberships"("group_id", "topic_slug") VALUES (E'1666b56d-e30b-47c5-81a6-a78f77f14ed7', E'react');

INSERT INTO "public"."group_memberships"("group_id", "topic_slug") VALUES (E'1666b56d-e30b-47c5-81a6-a78f77f14ed7', E'html');

INSERT INTO "public"."group_memberships"("group_id", "topic_slug") VALUES (E'1666b56d-e30b-47c5-81a6-a78f77f14ed7', E'css');

INSERT INTO "public"."group_memberships"("group_id", "topic_slug") VALUES (E'1666b56d-e30b-47c5-81a6-a78f77f14ed7', E'javascript');
