import './Banner.css'

function Banner() {
     return (
        <header className="banner">
        <img src="../../public/imagens/banner.png" />
        
        <div 
        className="buttons">
            <button>Home</button>
            <button>Favoritos</button>
        </div>

        <div className="GOD">
        <img src="../../public/imagens/GOD.png"></img>
        </div>

        <div className="image-gallery">
            <img src="../../public/imagens/GHOST.png"></img>
            <img src="../../public/imagens/JAYUCT.jpeg"></img>
            <img src="../../public/imagens/P+W.png"></img>
            <img src="../../public/imagens/Hill.png"></img>
        </div>
        </header>
    )
}

export default Banner ;

// Quando clicar no button deve ser redirecionado a uma nova página 