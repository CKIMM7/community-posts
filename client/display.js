console.log('display.js')
const contentContainer = document.querySelector('#content-container');
const formContainer = document.querySelector('#form-container');


let postsGlobal;
let firstLoaded = true;
let reLoaded = false;

let currentArray;

let show = false;

const displayPosts = () => {

    firstLoaded = false
    postsGlobal.forEach((p, i) => {

        //console.log(p)
        let post = document.createElement('div');
        let body = document.createElement('p');
        let img = document.createElement('img');
        let bodySection = document.createElement('div');
        let commentSection = document.createElement('div');
        let emojiSection = document.createElement('div');
        let commentButton = document.createElement('button');
        let commentInput = document.createElement('input');

        bodySection.classList.add('body');
        post.classList.add('post');
        commentSection.classList.add('comments');
        emojiSection.classList.add('emojis');
        commentButton.classList.add('comment-button');
        commentInput.classList.add('comment-input');
        commentInput.type = 'text'


        body.textContent = `${p.body} - ${p.date}`;
        img.src = p.img;
        commentButton.textContent = 'comments';
        commentSection.style.display = 'none' 
        commentInput.addEventListener("keydown", sendComment.bind(null, p.postId));

        commentButton.onclick = function(){
            show = !show
            console.log(show)

            if(show)
            commentSection.style.display = 'block'

            if(!show)
            commentSection.style.display = 'none'

        };

        //if(!s.img) post.append(body, commentButton, commentSection, emojiSection);
        //contentContainer.append(post);


        post.append(body, img, commentButton, commentSection, emojiSection);
        contentContainer.append(post);

        if(p.comments) {
            
            p.comments.forEach(c => {
            let comment = document.createElement('div');
            let commentTitle = document.createElement('p');
            let commentDate = document.createElement('p');
            let input = document.createElement('input');

            comment.classList.add('comment');
            commentTitle.textContent = c.body;
            commentDate.textContent = c.date;
            input.type = 'text'
        
            comment.append(commentTitle, commentDate)
            commentSection.append(comment)

        })}

        commentSection.append(commentInput)

        if(p.reactionEmoji) {
            
            p.reactionEmoji.forEach(e => {
            let emoji = document.createElement('div');
            let emojiType = document.createElement('span');
            let emojiCount = document.createElement('span');

            emoji.classList.add('emoji');
            emojiType.textContent = e.type;
            emojiCount.textContent = e.count;

            emojiType.onclick = function(){
            
                incrementEmoji(e.type, e.count, p.postId)
            }

            emoji.append(emojiType, emojiCount)
            emojiSection.append(emoji)
        })  
    }

});}



