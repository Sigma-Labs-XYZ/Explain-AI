SET check_function_bodies = false;
CREATE TABLE public.description (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    topic_id text NOT NULL,
    audience numeric NOT NULL,
    short text NOT NULL,
    long text
);
CREATE TABLE public.relationship (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    from_id text NOT NULL,
    to_id text NOT NULL,
    description text NOT NULL,
    priority integer DEFAULT 0 NOT NULL
);
CREATE TABLE public.topic (
    id text NOT NULL,
    image text,
    name text NOT NULL
);

ALTER TABLE ONLY public.description
    ADD CONSTRAINT description_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.relationship
    ADD CONSTRAINT relationship_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.topic
    ADD CONSTRAINT topic_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.description
    ADD CONSTRAINT description_topic_id_fkey FOREIGN KEY (topic_id) REFERENCES public.topic(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.relationship
    ADD CONSTRAINT relationship_from_fkey FOREIGN KEY (from_id) REFERENCES public.topic(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.relationship
    ADD CONSTRAINT relationship_to_fkey FOREIGN KEY (to_id) REFERENCES public.topic(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
