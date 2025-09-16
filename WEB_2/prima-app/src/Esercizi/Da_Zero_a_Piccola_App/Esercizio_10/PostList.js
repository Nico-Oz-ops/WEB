import React from "react";

function PostList({ posts }) { // riceve l'array di post dal genitore
  if (posts.length === 0) { // se non ci sono post
    return <p>Nessun post disponibile</p>; // messaggio default
  }

  return (
    <div>
      {posts.map((post, index) => (
        <article key={{ index }}>
          <h3>{post.titolo}</h3>
          <p>{post.contenuto}</p>
        </article>
      ))}
    </div>
  );
}

export default PostList;
