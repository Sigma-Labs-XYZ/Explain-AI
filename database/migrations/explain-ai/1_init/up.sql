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
    priority integer DEFAULT 0 NOT NULL
);
CREATE TABLE public.topic (
    slug text NOT NULL,
    image text,
    name text NOT NULL
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

INSERT INTO public.topic (slug, image, name) VALUES ('javascript', NULL, 'Javascript');
INSERT INTO public.topic (slug, image, name) VALUES ('html', NULL, 'HTML');
INSERT INTO public.topic (slug, image, name) VALUES ('css', NULL, 'CSS');
INSERT INTO public.topic (slug, image, name) VALUES ('react', NULL, 'React');
INSERT INTO public.description (id, topic_slug, audience, short, long) VALUES ('828cbb0a-8105-4ce6-950c-6ed1e6aad524', 'javascript', 5, 'JavaScript is a special language that helps make websites more fun and exciting. It helps your computer do things like move things around on the screen, make things happen when you click on them, and make things look different.', NULL);
INSERT INTO public.description (id, topic_slug, audience, short, long) VALUES ('515c491f-a904-4a89-83e9-49bea4e801cd', 'javascript', 10, 'JavaScript is a type of computer code that helps webpages do cool things. For example, when you play a game on a website, that game is powered by JavaScript. It can also make webpages look nicer by adding colors and animations. JavaScript is like a secret language that computers understand, and it helps make the internet a fun and exciting place.', NULL);
INSERT INTO public.description (id, topic_slug, audience, short, long) VALUES ('94569333-40a6-46f0-9e7f-aa0bb57bc692', 'javascript', 20, 'JavaScript is a computer programming language that is used to create interactive websites and applications. It allows web developers to create websites and applications that respond to user actions, such as moving a mouse over a button, typing something in a textbox, or clicking a link. It is used to add behavior, store and retrieve information, and change the style and layout of web pages.', NULL);
INSERT INTO public.relationship (id, from_slug, to_slug, description, priority) VALUES ('eb72a094-0376-4ce9-86ff-fcc9386c65db', 'javascript', 'css', 'Javascript and CSS work together to make websites look good and function properly.', 0);
INSERT INTO public.relationship (id, from_slug, to_slug, description, priority) VALUES ('6313a828-8861-4180-a5ae-0fa00c6d3be5', 'html', 'css', 'JavaScript is used to add interactivity to HTML pages.', 0);

