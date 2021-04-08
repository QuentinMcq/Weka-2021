drop schema if exists weka cascade;
create schema weka;
set search_path to weka;

create table theme
(
    theme_id serial primary key,
    name     varchar not null
);

insert into theme(name)
values ('histoire'),
       ('français'),
       ('informatique'),
       ('sport'),
       ('physique'),
       ('sciences');

create table quiz
(
    quiz_id serial primary key,
    name    varchar not null,
    image   varchar not null,
    theme   varchar not null
);

insert into quiz(name, image, theme)
values ('Connaissez-vous les animaux ?', 'https://cdn.pixabay.com/photo/2015/07/27/19/47/turtle-863336_960_720.jpg',
        'Animaux'),
       ('Test de technologie',
        'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_960_720.jpg', 'Technologie'),
       ('Evalue ta connaissance des jeux vidéos',
        'https://cdn.pixabay.com/photo/2016/10/13/00/22/illustration-1736462_960_720.png', 'Jeux vidéos'),
       ('Es-tu passioné de littérature ?', 'https://cdn.pixabay.com/photo/2017/01/31/18/21/books-2026194_960_720.png',
        'Livres et auteurs');

create table question
(
    question_id    serial primary key,
    quiz_id        int     not null,
    sentence       varchar not null,
    answer_1       varchar not null,
    answer_2       varchar not null,
    answer_3       varchar null,
    answer_4       varchar null,
    correct_answer varchar not null,
    nb_points      int     not null,
    foreign key (quiz_id) references quiz (quiz_id) on delete cascade
);

insert into question(sentence, answer_1, answer_2, answer_3, answer_4, correct_answer, nb_points, quiz_id)
values ('Quel est lanimal le plus lent du monde ?', 'Paresseux à trois doigts', 'Paresseux à quatre doigts',
        'Tortue à trois doigts', 'Tortue à quatre doigts', 'Paresseux à trois doigts', 1, 1),
       ('Quel oiseau est le symbole universel de la paix ?', 'Aigle', 'Pie', 'Hirondelle', 'Colombe', 'Colombe', 2, 1),
       ('Quel animal a la plus haute pression sanguine ?', 'https://picsum.photos/100', 'https://picsum.photos/100',
        'https://picsum.photos/100', 'https://picsum.photos/100', 'https://picsum.photos/200', 3, 1),
       ('Le python est un serpent venimeux. Vrai ou faux ?', 'Vrai', 'Faux', null, null, 'Faux', 3, 1),
       ('Lequel de ces composants nest pas un périphérique informatique ?', 'Clavier', 'Carte mère', 'Souris', 'Ecran',
        'Carte mère',
        3, 2),
       ('Comment appelle-t-on un réseau créé pour la communication à lintérieur dune organisation ?', 'World Wide Web',
        'Yahoo', 'Un intranet', 'Internet', 'Un intranet', 2, 2),
       ('Quand a été créé le DVD ?', '1995', '1990', '2000', '1970', '1995', 3, 2),
       ('Quel est le premier jeu vidéo considéré comment un succès commercial ?', 'Pong', 'Tetris', 'Donkey Kong',
        'Mario Bros', 'Pong', 1, 3),
       ('Quel est le jeu vidéo le plus vendu au monde ?', 'GTA', 'Cyberpunk 2077', 'Minecraft', 'Overwatch',
        'Minecraft', 2, 3),
       ('Quelle est la console la plus vendue au monde ?', 'XBOX 360', 'Playstation 2', 'Playstation 3',
        'Nintendo Switch', 'Playstation 2', 2, 3),
       ('Qui est lauteur de la saga Harry Potter  ?', 'George R.R. Martin', 'J. K. Rowling', 'Stephanie Meyer',
        'Mary Shelly', 'J. K. Rowling', 1, 4),
       ('Quel est le premier roman publié par Stephen King ?', 'Ca', 'Shining, lenfant lumière', 'Simetierre', 'Carrie',
        'Carrie', 2, 4),
       ('Quel est le nom de lalter ego maléfique dans lÉtrange Cas du docteur Jekyll et de M. Hyde ?', 'Dr. Jekyll',
        'M. Hyde', null, null, 'M. Hyde', 3, 4);

create table player
(
    player_id serial primary key,
    name      varchar not null,
    password  varchar not null
);

insert into player(name, password)
values ('quentin', 'quentin1234'),
       ('marie', 'marie1234'),
       ('maxime', 'maxime1234');