console.log('fetch.js')
const form = document.querySelector('form');
const postContent = document.querySelector('#post-content');
const postButton = document.querySelector('#post-button');

// commentInputs.addEventListener("click", function(e) {
//     e.preventDefault();
//     console.log('event lisenter')
//   });

postButton.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(postContent.value)
    let data = {
        body: postContent.value,
        comments: [],
        reactionEmoji: []
    }
    sendPost(data)
  });

  
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

const sendPost = (input) => {

    let url = `http://localhost:3000/posts`
    let obj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(input)
        }

    console.log(input)

    return new Promise(async (res, rej) => {

        try {
            const response = await fetch(url, obj);
            const data = await response.json();
            res(data)
        } catch (err) {
            console.log(err)
            rej(`${err}`)
        }
    })
}

const sendComment = (postId, e) => {

    if(e.code == 'Enter') {
    
    let url = `http://localhost:3000/comments`
    let obj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({postId: postId, body: e.target.value})
        }

    return new Promise(async (res, rej) => {

        try {
            const response = await fetch(url, obj);
            const data = await response.json();

            if(typeof(postId) === 'string') {

            let findPostIndex = data.findIndex((post)=> {
                return post.postId == postId;
            })

            console.log(findPostIndex)
            let commentToAdd = data[findPostIndex].comments[data[findPostIndex].comments.length - 1]

            console.log(commentToAdd)

             //new node
             let comment = document.createElement('div');
             let commentTitle = document.createElement('p');
             let commentDate = document.createElement('p');
 
             comment.classList.add('comment');
             commentTitle.textContent = commentToAdd.body;
             commentDate.textContent = commentToAdd.date;
 
             comment.append(commentTitle, commentDate)
 
             //reference node
             let inputList = document.querySelectorAll('.comment-input');
             console.log(inputList[findPostIndex -1])
 
             //parent node
             let parentNode = document.querySelectorAll('.comments');
             console.log(parentNode[findPostIndex])

             parentNode[findPostIndex].insertBefore(comment, inputList[findPostIndex -1]);

        }   

            if(typeof(postId) === 'number') {

            console.log(data[postId -1].comments[data[postId -1].comments.length -1])
            let commentToAdd = data[postId -1].comments[data[postId -1].comments.length -1]

            //new node
            let comment = document.createElement('div');
            let commentTitle = document.createElement('p');
            let commentDate = document.createElement('p');

            comment.classList.add('comment');
            commentTitle.textContent = commentToAdd.body;
            commentDate.textContent = commentToAdd.date;

            comment.append(commentTitle, commentDate)
            // commentSection.append(comment)

            //reference node
            let inputList = document.querySelectorAll('.comment-input');
            console.log(inputList[postId -1])

            //parent node
            let parentNode = document.querySelectorAll('.comments');
            console.log(parentNode[postId -1])

            parentNode[postId -1].insertBefore(comment, inputList[postId -1]);
            console.log(parentNode[postId -1])
        }   

            res(data)
        } catch (err) {
            console.log(err)
            rej(`${err}`)
        }
    })
    
    }    
}
   





