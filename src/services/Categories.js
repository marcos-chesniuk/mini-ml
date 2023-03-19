export async function getDomainDiscovery(searchTerm) {
    return fetch(`https://api.mercadolibre.com/sites/MLA/domain_discovery/search?q=${searchTerm}`)
    .then(res => res.json())
}

export async function getCategories(categoryId) {
    return fetch(`https://api.mercadolibre.com/categories/${categoryId}`)
    .then(res => res.json())
    .then(response => {
        return response.path_from_root
    })
}