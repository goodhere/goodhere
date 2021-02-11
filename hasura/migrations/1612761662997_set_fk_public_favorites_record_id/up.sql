alter table "public"."favorites"
           add constraint "favorites_record_id_fkey"
           foreign key ("record_id")
           references "public"."organizations"
           ("record_id") on update restrict on delete restrict;
