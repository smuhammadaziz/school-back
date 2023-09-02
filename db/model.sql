create extension if not exists "uuid-ossp";


create type user_role as enum('teacher', 'direktor','superadmin','zauch','zamdirektor');
create type class_num as enum ('1','2','3','4','5','6','7','8','9','10','11');


create table side(
  side_id uuid primary key  default uuid_generate_v4() null,
  title varchar(155) default  null,
  description text not null,
  photo text not null,
  created_at timestamp default current_timestamp,
  updated_at timestamp default null
);

create table class(
    class_id uuid primary key default uuid_generate_v4() null,
    number class_num not null,
    letter varchar(16) not null,
    descr text not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default null,
    isDelete BOOLEAN NOT NULL DEFAULT FALSE
);

create table users(
    user_id uuid primary key default uuid_generate_v4() null,
    name varchar(32) not null,
    l_name varchar(32) not null,
    age int not null,
    email varchar(255) default null,
    password varchar(255) default 'reitmanz' not null,
    subject varchar(64) default null,
    best BOOLEAN default false,
    image text,
    role user_role  not null,
    number class_num default null,
    letter varchar(16) default null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default null,
    isDelete BOOLEAN NOT NULL DEFAULT FALSE,
    class_id uuid default null,
     foreign key (class_id) references class(class_id)
);

insert into users(name, l_name, age, email, password, role)values('HUmoyun', 'Eshpolatov', 18, 'humoyuneshpolatov4@gmail.com', '$2a$12$GV2rcbFJaGgSzvBK578D7u4F/8CsLdDGtYvouVROU.nSVx65KqRrC', 'superadmin');

create table pupils(
    pupil_id uuid primary key default uuid_generate_v4() null,
    name varchar(32) not null,
    l_name varchar(32) not null,
    age int not null,
    congrolutation BOOLEAN default false,
    descr text default null,
    photo text,
    class_id uuid,
    user_id uuid,
    created_at timestamp default current_timestamp,
    updated_at timestamp default null,
    isDelete BOOLEAN NOT NULL DEFAULT FALSE,
    foreign key (class_id) references class(class_id),
    foreign key (user_id) references users(user_id)
);

create table news(
id uuid primary key default uuid_generate_v4() null,
title varchar(128) not null,
descr text not null,
photo text default null,
created_at timestamp default current_timestamp,
updated_at timestamp default null,
isDelete BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE course(
   id uuid primary key default uuid_generate_v4() null,
   title varchar(128) not null,
   descr text default null,
   photo text default null,
   created_at timestamp default current_timestamp,
   updated_at timestamp default null,
   isDelete BOOLEAN NOT NULL DEFAULT FALSE
);
