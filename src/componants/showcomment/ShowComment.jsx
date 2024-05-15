
import { sql } from "@vercel/postgres";
import style from "./comments.module.css"


export default async function ShowComment() {

  const result = await sql`SELECT * FROM comments`;
  const comments = result.rows;
  
  return (
        <div >
            <h2 className={style.h1}>Your Thoughts:</h2>
           
       
              {comments.map((comment) => (
        <div key={comment.id}>
      {/* <p>{comment.id}</p> */}
      {/* <h2>{comment.user_name}</h2> */}
      <p className={style.comment}>{comment.comment_text}</p>
  
    </div>
         ))}
         </div>
 
   

  );
}