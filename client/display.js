console.log('display.js')
const contentContainer = document.querySelector('#content-container');
const formContainer = document.querySelector('#form-container');

let postsGlobal;


const displayPosts = () => {

    console.log(postsGlobal)
    postsGlobal.forEach(p => {

        let post = document.createElement('div');
        let title = document.createElement('p');
        let body = document.createElement('p');
        let date = document.createElement('p');
        let commentSection = document.createElement('div');
        let emojiSection = document.createElement('div');

        post.classList.add('post');
        commentSection.classList.add('comments');
        emojiSection.classList.add('emojis');

        title.textContent = p.title;
        body.textContent = p.body;
        date.textContent = p.date;

        post.append(title,body,date, commentSection, emojiSection);
        contentContainer.append(post);

        p.comments.forEach(c => {
            let comment = document.createElement('div');
            let commentTitle = document.createElement('p');
            let commentDate = document.createElement('p');

            comment.classList.add('comment');
            commentTitle.textContent = c.body;
            commentDate.textContent = c.date;
        
            comment.append(commentTitle, commentDate)
            commentSection.append(comment)

        })

        p.reactionEmoji.forEach(e => {
            let emoji = document.createElement('div');
            let emojiType = document.createElement('span');
            let emojiCount = document.createElement('span');

            emoji.classList.add('emoji');
            emojiType.textContent = e.type;
            emojiCount.textContent = e.count;

            emoji.append(emojiType, emojiCount)
            emojiSection.append(emoji)
        })  

    });
}
