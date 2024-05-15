
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default function AddComment() {
    async function handleAddComment(formData) {
      "use server";
  
      const user_name = formData.get("user_name");
      const comment_text= formData.get("comment_text");
  
      await sql`INSERT INTO comments (comment_text,user_name) values ( ${comment_text},${user_name})`;
  
      revalidatePath("/");
  
      redirect("/");
    }
  
    return (
  
        <form action={handleAddComment}>
        <label htmlFor="user_name">Your name</label>
        <input name="user_name" id="user_name" placeholder="Name" />
        <label htmlFor="comment_text">comment</label>
        <input name="comment_text" id="comment_text" placeholder="comment" />

        <button type="submit">Add a comment!</button>
      </form>
 
    )
    
} 