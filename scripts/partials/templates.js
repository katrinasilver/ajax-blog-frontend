const form = () => {
  return `
    <form id="form" class="form is-hidden">

      <div class="field">

        <label for="post-title" class="label is-1">Title:
          <input id="post-title" class="input post-title" type="text" name="title" placeholder="What is this about?">
        </label>

        <label for="post-author" class="label is-1">Author:
          <input id="post-author" class="input post-author" type="text" name="author" placeholder="Who are you?">
        </label>

        <label for="article" class="label is-1"> Content:
          <textarea name="article" id="article" class="textarea post-body" placeholder="What's on your mind?"></textarea>
        </label>

        <div class="control">
          <input type="submit" class="save button is-link" value="Add Post">
        </div>
        <hr>
      </div>

    </form>
  `
}

const newPost = (id, date, author, title, content) => {
  return `
    <article class="post ${id}">
      <h2 class="title">${ title }</h2>
      <div class="date">date: ${ date }</div>
      <div class="author">posted by: ${ author }</div>
      <div class="content">
        <p>${ content }</p>
      </div>
    </article>
    <hr>
  `
}

module.exports = {
  form,
  newPost
}
