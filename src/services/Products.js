import { ML_API, LIMIT } from "./constants";

export function getProducts(searchTerm) {
    return fetch(`${ML_API}sites/MLA/search?q=${searchTerm}&limit=${LIMIT}`)
    .then(res => res.json())
    .then(response => {
        return response.results
    });
}

export function getProduct(id) {
    return fetch(`${ML_API}items/${id}`)
    .then(res => res.json());
}

export function getProductDescription(id) {
    return fetch(`${ML_API}items/${id}/description`)
    .then(res => res.json());
}