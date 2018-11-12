const form = () => {
  return `
    <form id="form" class="form is-hidden">

      <div class="field">

        <label for="post-title" class="label is-1">Title:
          <input id="post-title" class="input post-title" type="text" name="title" placeholder="What is this about?">
        </label>

        <label for="post-author" class="label is-1">Author (not working yet!):
          <input id="post-author" class="input post-author" type="text" name="author" placeholder="Who are you?">
        </label>

        <label for="article" class="label is-1"> Content:
          <textarea name="article" id="article" class="textarea post-body" placeholder="What's on your mind?"></textarea>
        </label>

        <label for="post-tags" class="label is-1">Tags (not working yet!):
          <input id="post-tags" class="input post-tags" type="text" name="tags" placeholder="Javascript, HTML, Sass, OOP">
        </label>

        <div class="control">
          <input type="submit" class="save button is-link" value="Add Post">
        </div>
        <hr>
      </div>

    </form>
  `
}

const newPost = (title, date, content) => {
  return `
    <article class="post">
      <h2 class="title">${ title }</h2>
      <div class="date">created: ${ date }</div>
      <div class="author">written by: katweena</div>
      <div class="content(">
      <p>${ content }</p>
      </div>
      <h6 class="subtitle is-6">Tags:</h6>
      <span class="tag">coming soon</span>
    </article>
    <hr>
  `
}

module.exports = {
  form,
  newPost
}
