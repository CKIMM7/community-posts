console.log('fetch.js')

const getPosts = () => {

    let url = `http://localhost:3000/api`

    return new Promise(async (res, rej) => {
        try {
            const response = await fetch(url);
            const data = await response.json();

            postsGlobal = data;
            displayPosts()

            res(data)
        } catch (err) {
            console.log(err)
            rej(`${err}`)
        }
    })
}


