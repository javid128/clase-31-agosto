const Pokemon =[
    {
        id: 1,
        name: "Pikachu",
        imagen: "https://i.pinimg.com/736x/d9/84/4c/d9844c0802fd6601ab55d37916939d41.jpg",
        alt: "Imagen de Pikachu"
    },
     {
        id: 2,
        name: "Charizard",
        imagen: "https://e7.pngegg.com/pngimages/278/675/png-clipart-charizard-pikachu-pokemon-x-and-y-pikachu-dragon-carnivoran.png",
        alt: "Imagen de Charizard"
    },
     {
        id: 3,
        name: "Bulbasaur",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        alt: "Imagen de Bulbasaur"
    }
]

export default function Cards(){
    return(
        Pokemon.map((item,index)=>{
            return(
                <div className="Card" key={index}>
                    <h1>Nro: {item.id} Nombre: {item.name}</h1>
                    <img className="image" src={item.imagen} alt={item.alt} />
                    
                </div>
            )
        })
    )
}