addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    // URL of the original game content
    const targetUrl = 'https://1v1lolonline.github.io/1v1-lol-2/'
    
    // Fetch the original URL
    const response = await fetch(targetUrl, {
        method: request.method,
        headers: request.headers
    })

    // Return the response back to the user
    return response
}
