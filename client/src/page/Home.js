import React from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div>
      <Navigation />
      <div id={"Logo"}>
        <Logo />
      </div>
      <h1>Home sweet home</h1>
      <p>Bienvenue dans ce jeux complétement original et innovant. Vous devez faire deviner des mots ou des expressions de la langue française aux autres joueurs, le tout en vous aidant de vos talents d'artistes.</p>
      <p>Le joueur qui aura deviner le plus de mots dans le temps imparti se verra sacré champion de <strong>Let's Drawmadère</strong></p>
      <p>Libérez votre patte artistique qui sommeil en vous et faites nous votre plus beau dessin.</p>
    </div>
  );
};

export default Home;
