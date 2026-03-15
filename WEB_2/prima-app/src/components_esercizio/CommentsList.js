export default function CommentsList({ comments }) {
  return (
    <ul>
      {comments.map((c) => (
        <li key={c.id}> {c.name}</li>
      ))}
    </ul>
  );
}
