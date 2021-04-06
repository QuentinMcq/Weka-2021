drop schema if exists sales cascade;
create schema sales;
set search_path to sales;

create table person
(
    per_id serial primary key,
    per_name      varchar
);

insert into person(per_name) values ('John'), ('Rosy'), ('Pierre');

create table object
(
    obj_id             serial primary key,
    obj_name           varchar,
    obj_initial_amount int check(obj_initial_amount > 0)
);

insert into object(obj_name, obj_initial_amount) values ('TV', 602), ('Smartphone', 400), ('Manga', 145);

create table sale
(
    per_id           int references person(per_id),
    obj_id           int references object(obj_id),
    last_sale_amount int check(last_sale_amount > 0),
    primary key(per_id, obj_id)
);

select *
from person join sale on person.per_id = sale.per_id;

select *
from person natural join sale;