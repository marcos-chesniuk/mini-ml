async function getDomainDiscovery(searchTerm) {
    return fetch(`https://api.mercadolibre.com/sites/MLA/domain_discovery/search?q=${searchTerm}`)
    .then(res => res.json())
}

export default async function getCategories(searchTerm) {
    const domainDiscovery = await getDomainDiscovery(searchTerm)
    if (domainDiscovery && domainDiscovery.length > 0) {
        const categoryId = domainDiscovery[0].category_id
        return fetch(`https://api.mercadolibre.com/categories/${categoryId}`)
            .then(res => res.json())
            .then(response => {
                return response.path_from_root
            })
    } else {
        return null
    }
}