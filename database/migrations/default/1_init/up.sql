SET check_function_bodies = false;
CREATE TABLE public.description (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    topic_slug text NOT NULL,
    audience numeric NOT NULL,
    short text NOT NULL,
    long text
);
CREATE TABLE public.relationship (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    from_slug text NOT NULL,
    to_slug text NOT NULL,
    description text NOT NULL,
    audience numeric DEFAULT 10 NOT NULL,
    priority integer DEFAULT 0 NOT NULL
);
CREATE TABLE public.topic (
    slug text NOT NULL,
    image text,
    name text NOT NULL,
    created_at date NOT NULL DEFAULT now()
);

ALTER TABLE ONLY public.description
    ADD CONSTRAINT description_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.relationship
    ADD CONSTRAINT relationship_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.topic
    ADD CONSTRAINT topic_pkey PRIMARY KEY (slug);
ALTER TABLE ONLY public.description
    ADD CONSTRAINT description_topic_id_fkey FOREIGN KEY (topic_slug) REFERENCES public.topic(slug) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.relationship
    ADD CONSTRAINT relationship_from_fkey FOREIGN KEY (from_slug) REFERENCES public.topic(slug) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.relationship
    ADD CONSTRAINT relationship_to_fkey FOREIGN KEY (to_slug) REFERENCES public.topic(slug) ON UPDATE RESTRICT ON DELETE RESTRICT;