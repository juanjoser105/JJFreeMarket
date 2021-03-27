const baseUrl= 'https://api.mercadolibre.com/sites/MCO'

export async function obtenerProductosParaBusqueda (q) {

  
    const response = await fetch(`${baseUrl}/search?q=${q}`)
    const responseJson = await response.json()
    return responseJson
  }

  export default obtenerProductosParaBusqueda;