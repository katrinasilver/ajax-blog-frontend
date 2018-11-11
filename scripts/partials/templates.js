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
          <button class="save button is-link">Save</button>
        </div>
        <hr>
        <div class="save notification is-hidden"><!-- append message here -->Success</div>

      </div>

    </form>
  `
}

module.exports = {
  form
}
