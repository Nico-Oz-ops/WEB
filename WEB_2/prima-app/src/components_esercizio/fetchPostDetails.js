const urlUsers = "https://jsonplaceholder.typicode.com/users/";
const urlComments = "https://jsonplaceholder.typicode.com/comments";

export default async function fetchPostDetails(post) {
  const userPromise = fetch(urlUsers + post.userId).then((res) => res.json());
  const commentsPromise = fetch(urlComments + "?postId=" + post.id).then(
    (res) => res.json()
  );

  const [user, comments] = await Promise.all([userPromise, commentsPromise]);

  return {
    ...post,
    username: user.username,
    comments,
  };
}
