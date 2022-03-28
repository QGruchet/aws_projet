backend/: Back-End API (use of socket.io to communicate with the front)
    src/:
        configs/ : configurations nécessaires à l'application

            db.config.js : configuration pour la BDD (nom de la BDD, nom d'utilisateur, ...)

            general.config.js : autres configurations comme le nombre d'enregistrements à afficher sur  chaque page pour la pagination
        
        controlers/ : contrôleurs nécessaires à l'application, correspondant à des méthodes recevant des routes et les convertissant en requêtes HTTP.

        middlewares/ : middlewares/intergiciels nécessaires à l'application, pour l'authentification, le logging ou autre

        models/ : data models nécessaires à l'application (dans notre cas relationnel). Contenu défini aussi par l'utilisation d'une bibliothèque ORM.

        routes/ : routes nécessaires à l'application. 1 fichier = 1 ensemble logique de routes.
        Exemple : Pour un type de ressource, on peut avoir plusieurs routes.

        services/ : = business logic.  Il peut contenir des services qui représentent des business objects et qui peuvent exécuter des requêtes sur la BDD.

        utils/ : aides et utilitaires nécessaires à l'application.

            helper.util.js. : par exemple une aide afin de calculer le décalage d'une requête SQL paginée
        
    test/ :
        
        integration/ :

        unit/ : (each file in src = a file in test/unit) (run npm start)


    index.js : Start the application (and therefore the server)
        requirements : Express app + linking routes with relative routers (and possibly add middlewares)
        dependencies : express, socket, WebSocket setup and connection

frontend/: Front-End GUI Application

    src/ :

        components/ : (composants principaux du GUI)

            canvas/ : zone centrale de dessin
            chat/ : zone de droite pour le chat
            players/ : zone de gauche pour les joueurs
            buttons/ : ...

            contrainer/ : CONTIENT UN FICHIER JS PERMETTANT AU FRONT DE COMMUNIQUER AVEC LE BACK
    
        public/ : (logos par exemple)

    test/ :