async function loadJSONfile() {
    let loadingJSON = await fetch('./data.json')
    let loadedJSON = await loadingJSON.json()
    return logJSON(loadedJSON)
}

function logJSON(json) {
    // console.log (json.currentUser.username)
    // console.log (json.currentUser.image.webp)
    // console.log (json.currentUser.image.png)

    json.comments.forEach(comments => {
        newMainComment(comments)
        // console.log(comments.content)
        // console.log(comments.createdAt)
        // console.log(comments.score)
        // console.log(comments.user.username)
        // console.log(comments.user.image.webp)
        // console.log(comments.user.image.png)
        if (comments.replies.length!=0) {
            subCommentsSection();
            comments.replies.forEach(element => {
                newSubComment(element)
                // console.log(element.content)
                // console.log(element.createdAt)
                // console.log(element.replyingTo)
                // console.log(element.score)
                // console.log(element.user.username)
                // console.log(element.user.image.webp)   
                // console.log(element.user.image.png)             
            });
        }

    });
}

let viewComments = document.querySelector('.viewComments'); // all comments go here
function newMainComment(comment) {
    let mainCommentHTML = `
    <section class="mainComment">
      <div class="optionsDesktop">
        <div class="pointsControl">
            <span class="pointsControlPlus"><img src="./images/icon-plus.svg"></span>
            <span>${comment.score}</span>
            <span class="pointsControlMinus"><img src="./images/icon-minus.svg"></span>
        </div>
      </div>
      <div class="wrapperComment">
        <div class="commentHead">
          <img src=" ${comment.user.image.webp}" class="commentHeadAvatar">
          <span class="commentHeadUser">${comment.user.username}</span>
          <span class="commentHeadTime">${comment.createdAt}</span>
          <div class="commentHeadReply"><img src="./images/icon-reply.svg">Reply</div>
        </div>
        <div class="commentBody">${comment.content}</div>
        <div class="optionsMobile">
          <div class="pointsControl">
            <span class="pointsControlPlus"><img src="./images/icon-plus.svg"></span>
            <span>${comment.score}</span>
            <span class="pointsControlMinus"><img src="./images/icon-minus.svg"></span>
        </div>
        <div class="commentFootReply"><img src="./images/icon-reply.svg">Reply</div>
        </div>
      </div>
      </section>
    `

    viewComments.insertAdjacentHTML("beforeend", mainCommentHTML)
}

function subCommentsSection() {
    let subCommentsHTML = `
    <section class="subComments">
    <div class="subCommentsSidebar"><hr></div>
    <div class="subCommentsComments">
    </div>
    </section>
    `
    viewComments.insertAdjacentHTML("beforeend", subCommentsHTML)

}

function newSubComment(comment) {
    let subCommentHTML = `
    <section class="subComment">
      <div class="optionsDesktop">
        <div class="pointsControl">
            <span class="pointsControlPlus"><img src="./images/icon-plus.svg"></span>
            <span>${comment.score}</span>
            <span class="pointsControlMinus"><img src="./images/icon-minus.svg"></span>
        </div>
      </div>
      <div class="wrapperComment">
        <div class="commentHead">
          <img src=" ${comment.user.image.webp}" class="commentHeadAvatar">
          <span class="commentHeadUser">${comment.user.username}</span>
          <span class="commentHeadTime">${comment.createdAt}</span>
          <div class="commentHeadReply"><img src="./images/icon-reply.svg">Reply</div>
        </div>
        <div class="commentBody">${comment.content}</div>
        <div class="optionsMobile">
          <div class="pointsControl">
            <span class="pointsControlPlus"><img src="./images/icon-plus.svg"></span>
            <span>${comment.score}</span>
            <span class="pointsControlMinus"><img src="./images/icon-minus.svg"></span>
        </div>
        <div class="commentFootReply"><img src="./images/icon-reply.svg">Reply</div>
        </div>
      </div>
      </section>
    `
    // inside subCommentsComments
    let subCommments = Array.from(viewComments.querySelectorAll('.subCommentsComments')).pop();
    subCommments.insertAdjacentHTML("beforeend", subCommentHTML)
}

loadJSONfile()
