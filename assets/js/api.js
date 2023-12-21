
//função para solicitações dos dados de perfil de uma API do github e converte em um JSON
async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/wastenio/js-developer-portfolio-DIO/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}
