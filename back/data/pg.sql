drop schema if exists weka cascade;
create schema weka;
set search_path to weka;


create table key_word
(
    key_word_id serial primary key,
    theme       varchar not null
);

insert into key_word(theme)
values ('histoire'),
       ('français'),
       ('informatique'),
       ('sport'),
       ('physique');

create table quiz
(
    quiz_id     serial primary key,
    name        varchar not null,
    image       varchar not null,
    theme varchar not null
);

insert into quiz(name, image, theme)
values ('animaux', 'https://picsum.photos/200/100', 'histoire'),
       ('phones', 'https://picsum.photos/200', 'physique'),
       ('sushi', 'https://picsum.photos/200/75', 'sport');

create table question
(
    question_id serial primary key,
    quiz_id     int,
    sentence    varchar not null,
    image       varchar null,
    answer_1    varchar not null,
    answer_2    varchar not null,
    answer_3    varchar null,
    answer_4    varchar null,
    nb_points   int     not null,
    foreign key (quiz_id) references quiz (quiz_id)

);

insert into question(sentence, image, answer_1, answer_2, answer_3, answer_4, nb_points, quiz_id)
values ('What is the name of Ken ?', 'https://picsum.photos/200', 'Kitano', 'Kenji', 'Kaneki', 'Kirano', 1, 1),
       ('What is the answer ?', null, 'Kitano', 'Kenji', 'Kaneki', 'Kirano', 2, 1),
       ('What is the second answer ?', null, 'test1', 'test2', null, null, 3, 2);

create table player
(
    user_id  serial primary key,
    name     varchar not null,
    password varchar not null,
    age      int     not null
);

insert into player(name, password, age)
values ('Quentin', 'quentin1234', 20),
       ('Marie', 'marie1234', 22),
       ('Maxime', 'maxime1234', 21);