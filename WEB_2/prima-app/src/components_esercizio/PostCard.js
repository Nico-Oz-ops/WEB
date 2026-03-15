import CommentsList from "./CommentsList";

export default function PostCard({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <small>{post.username}</small>

      <CommentsList comments={post.comments} />
    </div>
  );
}
