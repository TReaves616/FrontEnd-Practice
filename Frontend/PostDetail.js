import React, { useState } from "react";
import Comments from "./Comments";

export default function PostDetail({ post }) {
   const [comments, setComments] = useState([]);
   const [clicked, setClicked] = useState(false);

   const handleClick = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
         .then((response) => response.json())
         .then(setComments)

         .catch((error) => {
         console.log(error);
         });
   };

   return (
      <div>
         <h2>{post.title}</h2>
         <p onClick={handleClick}>{post.body}</p>
         <p>
         <Comments comments={comments} clicked={clicked} />
         </p>
      </div>
   );
}
