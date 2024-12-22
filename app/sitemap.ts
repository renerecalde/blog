export const baseUrl = 'https://renerecalde.github.io/';

export default async function sitemap() {
    let routes = ['', '/blog'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes]
}