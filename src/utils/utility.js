function getImageUrl(path) {
    return new URL(`../assets/movie-covers/${path}`, import.meta.url).href
}
export {getImageUrl}