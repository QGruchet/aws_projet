# Utilisation de Docker

## Introduction

Docker va vous permettre de travailler sur le projet sans installer ses dépendances directement sur votre environnement de travail.
Voici quelques brèves explications sur son utilisation.

⚠️ : Docker doit être installé sur votre environnement de travail.

## Lancement du serveur

```sh
docker compose up --build
```

Cette commande permet de construire et lancer les conteneurs composés de 2 services pour le moment :
- Le serveur node qui gère la partie backend
- La base de données Postgres

Une fois lancé, il suffit d'accéder à localhost sur votre navigateur pour afficher la page d'accueil.

Le conteneur peut être arrêté avec Ctrl+C.

## Afficher la liste des conteneurs

```sh
docker ps
```

## Accéder à un conteneur

```sh
docker exec -it <nom_du_conteneur> sh
```

Cette commande permet d'ouvrir un shell dans le conteneur.
Si vous avez besoin de rajouter un package au serveur node, vous pouvez le faire avec la commande suivante une fois connecté au conteneur `app`:
```sh
npm install <nom_du_package> (--save | --save-dev)
```

⚠️ : Ne pas oublier le flag `--save` ou `--save-dev` pour que le package soit ajouté au fichier `package.json` du projet. (Sinon il sera installé uniquement localement mais pas en relancant le serveur)

Pour accéder à la base de données, vous pouvez utiliser la commande suivante :
```sh
psql -h db -p 5432 -d website_db -U admin
```

Avec le mot de passe `admin`.

## Supprimer les données des conteneurs

```sh
docker system prune -a
````

⚠️ : Cette commande supprime uniquement les ressources qui ne sont pas utilisées par les conteneurs en cours d'exécution.
