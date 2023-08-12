const blogPostsDiv = document.getElementById("blog-posts");

const main = async () => {
  const posts = await fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json");
  const postsData = await posts.json();

  for (const post of postsData) {
    console.log(post);
    blogPostsDiv.innerHTML += `
        <div class="p-card u-no-padding--bottom">
            <h4 class="header-and-footer">CLOUD AND SERVER</h4>
            <hr class="u-no-margin--left u-no-margin--right">
            <img class="p-card__image u-no-margin--bottom" src=${post.featured_media} >
            <div class="p-card__inner">
                <h4 class="title u-no-margin--bottom"><a href="#">${post.title.rendered}</a></h4>
            </div>
            <div class="p-card__inner">
                <h6>By <a href="#">${post._embedded.author[0].name} </a> on ${new Date(post.date).toLocaleDateString()} </h6>
            </div>
            <hr class="u-no-margin--left u-no-margin--right">
            <h4 class="header-and-footer">Article</h4>
        </div>
    `;
  }
};

main();