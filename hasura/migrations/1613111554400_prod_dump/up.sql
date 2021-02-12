CREATE TABLE public.follow (
    id integer NOT NULL,
    follower_id text NOT NULL,
    following_id text NOT NULL
);
CREATE SEQUENCE public.follow_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.follow_id_seq OWNED BY public.follow.id;
ALTER TABLE ONLY public.follow ALTER COLUMN id SET DEFAULT nextval('public.follow_id_seq'::regclass);
ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_id_key UNIQUE (id);
ALTER TABLE ONLY public.follow
    ADD CONSTRAINT follow_follower_id_following_id_key UNIQUE (follower_id, following_id);
