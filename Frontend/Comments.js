import React from "react";

export default function Comments({ comments, clicked }) {
   const commentList = comments.map((comment) => <p>{comment.body}</p>);

   return <div>{commentList}</div>;
}
