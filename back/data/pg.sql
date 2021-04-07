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
       ('physique'),
       ('sciences');

create table quiz
(
    quiz_id  serial primary key,
    name     varchar not null,
    image    varchar not null,
    theme varchar not null
);

insert into quiz(name, image, theme)
values ('Animals', 'https://picsum.photos/200', 'animal'),
       ('Technology', 'https://picsum.photos/200', 'technology');

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
    correct_answer varchar not null,
    nb_points   int     not null,
    foreign key (quiz_id) references quiz (quiz_id)

);

insert into question(sentence, image, answer_1, answer_2, answer_3, answer_4, correct_answer, nb_points, quiz_id)
values ('What is the slowest animal of the world ?', 'https://picsum.photos/200', 'Three-toed Sloth', 'Four-toed Sloth',
        'Three-toed Turtle', 'Four-toed Turtle', 'Three-toed Sloth', 1, 1),
       ('Which bird is a universal symbol of peace ?', null, 'Eagle', 'Magpie', 'Swallow', 'Dove', 'Dove',2, 1),
       ('Which animal has the highest blood pressure ?', null, 'https://picsum.photos/100', 'https://picsum.photos/100', 'https://picsum.photos/100', 'https://picsum.photos/100', 'https://picsum.photos/200', 3, 1),
       ('The python is a poisonous snake. True or false ?', null, 'True', 'False', null, null,'False', 3, 1),
       ('Which of these is not a peripheral, in computer terms ?', null, 'Keyboard', 'Motherboard', 'Mouse', 'Monitor','Motherboard',
        3, 2),
       ('A network designed to allow communication within an organization is called ?', null, 'The World Wide Web',
        'Yahoo', 'An intranet', 'The Internet','An intranet', 2, 2),
       ('When was the DVD introduced ?', null, '1995', '1990', '2000', '1970','1995', 3, 2);

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