let div = document.querySelector('.childpoke');

  const criarElemntos = (img1, indice,name) =>{
    const divPoke = document.createElement('div');
    const img = document.createElement("img");
    const para = document.createElement('p');
    const texto = document.createTextNode(`${indice} - ${name}`)
    
    divPoke.setAttribute('class', 'containerPoke')
    
    img.src= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${img1}.png`;    
                                              
    para.appendChild(texto)
    divPoke.appendChild(img);
    divPoke.appendChild(para)
    div.appendChild(divPoke)    
} 

const getAPi=  async ()=> {
    for (let i = 1;  i <= 45; i++){
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const urlJson = await url.json();  
    criarElemntos(i,i, urlJson.name)
                 
    } 
}

getAPi()
