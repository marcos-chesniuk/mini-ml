export default function getProducts(searchTerm) {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}&limit=4`)
    .then(res => res.json())
    .then(response => {
        console.log(response)
        return response.results
    })
}