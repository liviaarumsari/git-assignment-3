async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
}

async function fetchComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return await response.json();
}

fetchPosts()
  .then((posts) => {
    console.log("Jumlah posts: ", posts.length);
    return fetchComments();
  })
  .then((comments) => {
    console.log("Jumlah comments: ", comments.length);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
