console.log('routes.js')
const currrentPath = window.location.href;

const routes = (path) => {

    if(!path) {
        
        //when website first loaded
        if(!postsGlobal && firstLoaded) {
            console.log('when website first loaded')
            formContainer.style.display = 'none';
            modal.style.display = "none";
            getPosts()
        } else if(postsGlobal && reLoaded) {

            console.log('when website needs to reload with new data')
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
        console.log('write posts')
        contentContainer.style.display = 'none';
        formContainer.style.display = 'block';

    }   
}

routes()



    
