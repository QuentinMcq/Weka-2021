# Quiznet

## Organisation

L'équipe est composée de **Maxime Dujardin**, **Quentin Macq** et **Marie Wantiez**. <br/>
**QuizNet** est une application permettant à des joueurs de participer à des quiz sur différents thèmes. Les joueurs
peuvent également proposer leurs propres quiz. Les thèmes sont définis par les joueurs, ils sont donc variés. Le projet
est réalisé avec

<b><u>Front</u></b> : **React (v17.0.2)**

```json
{
  "dependencies": {
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-fileupload": "^1.2.1",
    "jsonwebtoken": "^8.5.1",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.7",
    "passport": "^0.4.1",
    "passport-jwt": "^4.0.0",
    "passport-local": "^1.0.0",
    "pg": "^8.5.1"
  },
  "devDependencies": {
    "chai": "^4.3.4",
    "chai-http": "^4.3.0",
    "mocha": "^8.3.2",
    "request": "^2.88.2"
  }
}
```

<b><u>Back</u></b> : **Express.js (v4.17.1)**

```json
{
  "dependencies": {
    "@reach/router": "^1.3.4",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "bootstrap": "^4.6.0",
    "react": "^17.0.2",
    "react-bootstrap": "^1.5.2",
    "react-cookie": "^4.0.3",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  },
  "devDependencies": {
    "axios": "^0.21.1",
    "cypress": "^7.0.1"
  }
}
```

## Gestion de projet

Nous avons utilisé **Trello** tout au long du projet pour gérer les différentes tâches à accomplir. Cet outil nous
permet de diviser les tâches en différentes listes et de les attribuer aux membres de l'équipe. Le système d'étiquettes
permet d'avoir un rendu visuel plus lisible et plus propre: nous avons créé les étiquettes "front", "back", "bdd", "
test", "obligatoire 1", "obligatoire 2", etc.

Au début du projet, nous avons travaillé ensemble sur la mise en place de la base de données. Ainsi, nous avons pu nous
assurer de partir sur la même base et ainsi faciliter le déroulement du projet.

Chaque jour, nous commencions avec un *Daily Meeting* pour discuter de l'avancement de nos tâches et attribuer les
tâches du jour. Nous utilisions **Zoom** pour partager nos écrans et discuter du code en cours ou prendre des décisions
communes concernant le projet.

Les tâches ont d'abord été préparées dans les listes correspondantes (*back, front, database, test*), puis déplacée
dans "A faire aujourd'hui" au début de chaque jour. Lorsqu'une tâche était commencée, elle passait dans la liste "En
cours", puis dans "A valider" lorsque c'était nécessaire. Ainsi, les professeurs ont pu visualiser les tâches à valider
facilement, et nous savions ce que nous devions montrer. Finalement, la tâche validée ou qui n'avait pas besoin de
validation passait dans "Done".

Cette organisation nous a permis d'avancer de façon claire et efficace dans ce projet.

Rôles ->

## Application

### Fonctionnalités obligatoires

| Fonctionne totalement | Fonctionne partiellement | Ne fonctionne pas | Non fait | Bonus
| --------------------- |  ----------------------- |  ---------------- | -------- | ----- |
| Création de la base de données - Maxime, Quentin et Marie
| Insertion de données - Marie
|
| | Création, modification d'un quiz - Quentin
| | | | | Suppression d'un quiz - Quentin
| Accès aux questions d'un quiz - Maxime
| Calcul des points d'un quiz - Maxime
| Affichage des quiz, avec l'image associée - Quentin et Marie
|  | Affichage des quiz en fonction d’un mot-clé - Quentin
|
| Création des questions pour chaque quiz - Quentin
| | Authentification - Quentin
| | | | Limitation des possibilités des joueurs non authentifiés
| | | | Sauvegarde du score des joueurs authentifiés
| | | | Modification et lancement de ses propres quiz
| Création un utilisateur - Quentin
|
| | Création de tests - Maxime

## Mise en place

<h3>Front</h3>
Côté front, la commande ``npm run start`` permet de lancer le serveur Node sur le port 3000.

```json
{
  "scripts": {
    "start": "react-scripts start"
  }
}
```

<h3>Back</h3>
Côté back, La commande ``npm run start`` permet de lancer le serveur Express sur le port 8000.

<u>**Bonus**</u> : la commande ``npm run resetDB`` permet de drop le schema utilisé pour le projet et de réinsérer les
données.

```json
{
  "scripts": {
    "start": "nodemon server.js",
    "resetDB": "psql -f data/pg.sql"
  }
}
```

## Retrospective

Ce projet fut intéressant et nous a laissé beaucoup de libertés, ce que nous avons apprécié. Nous avons cependant
rencontré quelques difficultés, notamment à la gestion du CRUD sur les quiz ainsi qu'au niveau des tests (problèmes
d'exécution). La plupart du temps, nous avons su gérer ces soucis pour en arriver au résultat que nous vous présentons
aujourd'hui. Notre équipe présente différentes forces car nos compétences sont variées et nous avons donc pu travailler
en parallèle pour arriver à un résultat qui nous satisfait.

Cependant, tout projet peut être amélioré et si nous étions amenés à repartir de zéro, nous travaillerions différemment.
En effet, nous considérons ne pas avoir passé assez de temps sur les tests au détriment du reste de l'application.

Nous pouvons donc dire que ce projet nous a permis de revoir certains points fondamentaux du JavaScript ainsi que d'approfondir
notre connaissance du framework React.


