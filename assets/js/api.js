
//função para solicitações dos dados de perfil de uma API do github e converte em um JSON
async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/wastenio/My-PortFolio/main/assets/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}
