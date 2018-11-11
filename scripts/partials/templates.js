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

        <label for="post-body" class="label is-1"> Content:
          <textarea id="post-body" class="textarea post-body" placeholder="What's on your mind?"></textarea>
        </label>

        <label for="post-tags" class="label is-1">Tags (Optional):
          <input id="post-tags" class="input post-tags" type="text" name="author" placeholder="Javascript, HTML, Sass, OOP">
        </label>

        <div class="control">
          <input type="submit" class="save button is-link" value="Add Post">
        </div>
        <hr>
      </div>

    </form>
  `
}

const post = (title, author, date, content, tags) => {
  return `
      <article class="post ${title}">
      <h2 class="title">${ title}</h2>
      <div class="author">${ author }</div>
      <div class="date">${ date }</div>
      <div class="content">
        <p>${ content }</p>
      </div>
      <span class="tag is-primary">${ tags }</span>
    </article>
  `
}

module.exports = {
  form, post
}
