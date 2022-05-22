import React from 'react';
import Navigation from "../components/Navigation";
import { Alert, Button, Container, Form } from 'react-bootstrap';


export default function Tutorial() {
  return (
    <Container fluid='w-100' >
      <Navigation />
      <h2 className='text-center mt-md-5' id='subtitles'><strong>How to play this game ?</strong></h2>
        <div className={"tuto-pic"}>

         <img src='/tuto.png' alt='logo' id='logo' className="mx-auto d-block md-2 mt-5" style={{ width : "99%", height: "100%", border: "1px solid black" }}/>
        </div>
        <div className={"tuto-left"}>
          <p className={"number"}><strong>1</strong></p>
          <p>
            Vous pouvez voir sur ce côté l'ensemble des noms des joueurs ainsi que leurs scores durant cette partie.
          </p>
          <p className={"number"}><strong>2</strong></p>
          <p>
            Il s'agit de la zone principale, celle où vous pouvez dessiner. Elle permet également de voir le dessin qu'un autre joueur effectue pour tenter de le deviner
          </p>
          <p className={"number"}><strong>3</strong></p>
          <p>
            La zone de séléction des options pour le dessin. Le joueur qui dessine grâce à ces boutons changé la couleur, l'épaisseur et la forme du trait. Mais également
            enregistrer son chef d'oeuvre, remplir d'une couleur toute la zone de dessin ou effacer son travail.
          </p>
          <p className={"number"}><strong>4</strong></p>
          <p>
            Il s'agit du chat de partie. Vous pouvez discutez avec vos amis des magnifiques peintures qu'ils produissent. C'est également là que vous pourrez faire une prédiction
            sur ce que dessine le dessinateur.
          </p>

        </div>
    </Container>
  );
};
