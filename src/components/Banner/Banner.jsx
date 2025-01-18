import React, { useState } from 'react';
import './Banner.css';

function Banner() {
  // Função para rolar até as imagens de favoritos
  const scrollToFavorites = () => {
    const element = document.getElementById("favorites-section"); // Obtém a div com o id 'favorites-section'
    element.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até o elemento
  };

  return (
    <header className="banner">
      <img src="/imagens/banner.png" alt="Banner" />
      
      <div className="buttons">
        <button onClick={scrollToFavorites}>FAVORITOS</button>
      </div>

      <div className="GOD">
        <img src="/imagens/GOD.png" alt="GOD" />
      </div>

      <div id="favorites-section" className="image-gallery">
        <img src="/imagens/GHOST.png" alt="Ghost" />
        <img src="/imagens/JAYUCT.jpeg" alt="Jayuct" />
        <img src="/imagens/P+W.png" alt="P+W" />
        <img src="/imagens/Hill.png" alt="Hill" />
        <img src="/imagens/candy.png" alt="Candy" />
        <img src="/imagens/mesmerize.png" alt="Mesmerize" />
        <img src="/imagens/mango.png" alt="Mango" />
        <img src="/imagens/victoria.png" alt="Victoria" />
        <img src="/imagens/oceano.png" alt="Oceano" />
        <img src="/imagens/pericles.png" alt="Pericles" />
        <img src="/imagens/hariel.png" alt="Hariel" />
        <img src="/imagens/liniker.png" alt="Liniker" />
        <img src="/imagens/ludalcione.png" alt="Ludalcione" />
        <img src="/imagens/soraiacalema.png" alt="Soraiacalema" />
        <img src="/imagens/cuxi.png" alt="Cuxi" />
        <img src="/imagens/adoco.png" alt="Adoco" />
        <img src="/imagens/wuji.png" alt="Wuji" />
        <img src="/imagens/viradouro.png" alt="Viradouro" />
        <img src="/imagens/lolo.png" alt="Lolo" />
        <img src="/imagens/soulbr.png" alt="Soulbr" />
      </div>
    </header>
  );
}

export default Banner;
