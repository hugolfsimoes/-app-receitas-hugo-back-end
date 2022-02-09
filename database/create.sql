create schema users;

create table users(
  id serial primary key,
  name text not null,
  email text not null,
  password text not null,
   role text not null,
  date timestamp default now()
);