import { ML_API } from "./constants";

export async function getDomainDiscovery(searchTerm) {
    return fetch(`${ML_API}sites/MLA/domain_discovery/search?q=${searchTerm}`)
    .then(res => res.json());
}

export async function getCategories(categoryId) {
    return fetch(`${ML_API}categories/${categoryId}`)
    .then(res => res.json())
    .then(response => {
        return response.path_from_root
    });
}