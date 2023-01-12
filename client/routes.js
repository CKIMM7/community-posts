console.log('routes.js')
const currrentPath = window.location.href;

const routes = (path) => {

    if(!path) {
        
        //when website first loaded
        if(!postsGlobal && firstLoaded) {

            formContainer.style.display = 'none';
            modal.style.display = "none";
            getPosts()
        } else if(postsGlobal && reLoaded) {


            contentContainer.style.display = 'flex';
            formContainer.style.display = 'none';
            modal.style.display = "none";
            displayPosts()
        }

        else {
            contentContainer.style.display = 'flex';
            formContainer.style.display = 'none';
            modal.style.display = "none";
        }  

    } else if (path === "post") {

        contentContainer.style.display = 'none';
        formContainer.style.display = 'block';

    }   
}

routes()



    
