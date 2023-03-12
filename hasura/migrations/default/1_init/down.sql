SET check_function_bodies = false;

ALTER TABLE ONLY public.relationship
    DROP CONSTRAINT relationship_to_fkey;
ALTER TABLE ONLY public.relationship
    DROP CONSTRAINT relationship_from_fkey;
ALTER TABLE ONLY public.description
    DROP CONSTRAINT description_topic_id_fkey;
ALTER TABLE ONLY public.topic
    DROP CONSTRAINT topic_pkey;
ALTER TABLE ONLY public.relationship
    DROP CONSTRAINT relationship_pkey;
ALTER TABLE ONLY public.description
    DROP CONSTRAINT description_pkey;

DROP TABLE IF EXISTS "public"."description" CASCADE;
DROP TABLE IF EXISTS "public"."relationship" CASCADE;
DROP TABLE IF EXISTS "public"."topic" CASCADE;
