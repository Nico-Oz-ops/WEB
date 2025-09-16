/*
Esercizio 10: Mini-Blog - Unire Tutti i Concetti
Obiettivo: Creare una piccola applicazione che combina gestione dello stato, liste, form e
componenti. 
*/

import React, { useState } from "react";
import PostFrom from "./PostForm";
import PostList from "./PostList";

function BlogApp() {
  const [posts, setPosts] = useState([]); // stato principale, array di post

  const aggiungiPost = (post) =>
    setPosts(
      // aggiungo un nuovo post in cima
      [post, ...posts]
    );

  return (
    <div>
      <h1>Mini-Blog</h1>
      <PostFrom aggiungiPost={aggiungiPost}></PostFrom> {/* form per inserire post*/}
      <PostList posts={posts}></PostList> {/*lista dei post */}
    </div>
  );
}
export default BlogApp;
