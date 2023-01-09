console.log('routes.js')
const currrentPath = window.location.href;

const routes = (path) => {

    console.log(path)

    if(!path) {
        console.log('display posts')
        
        if(!postsGlobal) {
            formContainer.style.display = 'none';
            getPosts()
        }
        else {
            contentContainer.style.display = 'flex';
            formContainer.style.display = 'none';
        }  

    } else if (path === "post") {
        console.log('write posts')
        contentContainer.style.display = 'none';
        formContainer.style.display = 'block';

    }   
}

routes()
