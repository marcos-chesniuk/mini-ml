export function getProducts(searchTerm) {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}&limit=4`)
    .then(res => res.json())
    .then(response => {
        return response.results
    })
}

export function getProduct(id) {
    return fetch(`https://api.mercadolibre.com/items/${id}`)
    .then(res => res.json())
}

export function getProductDescription(id) {
    return fetch(`https://api.mercadolibre.com/items/${id}/description`)
    .then(res => res.json())
}