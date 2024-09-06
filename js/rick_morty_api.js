const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const image = document.getElementById('img_api');

const fetchApi = (value) => {
  const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);
    return data;
  });

  return result;
}

btnGo.addEventListener('click', async (event) => {
  event.preventDefault();

  if(characterId.value === ''){
    return content.innerHTML = 'É necessário fazer um filtro.';
  }

  const result = await fetchApi(characterId.value);
  
  image.src = `${result.image}`;

  
});

