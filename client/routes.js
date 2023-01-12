console.log('routes.js')
const currrentPath = window.location.href;

const routes = (path) => {

    if(!path) {
        
        if(!postsGlobal) {
            formContainer.style.display = 'none';
            modal.style.display = "none";
            getPosts()
        }

        else {
            contentContainer.style.display = 'flex';
            formContainer.style.display = 'none';
            modal.style.display = "none";
        }  

    } else if (path === "post") {
        console.log('write posts')
        contentContainer.style.display = 'none';
        formContainer.style.display = 'block';

    }   
}

routes()



    
