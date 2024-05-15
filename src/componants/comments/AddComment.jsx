


export default function AddComment() {
    async function handleAddComment(formData) {
      "use server";
  
      const name = formData.get("user_name");
      const description = formData.get("comment");
  
      await sql`INSERT INTO comments (comment) values ( ${comment})`;
  
      revalidatePath("/");
  
      redirect("/");
    }
  
    return (
      
        <form action={handleAddComment}>
        <label htmlFor="user_name">Your name</label>
        <input name="user_name" id="user_name" placeholder="Name" />
        <label htmlFor="comment">comment</label>
        <input name="comment" id="comment" placeholder="comment" />

        <button type="submit">Add a comment!</button>
      </form>
    )
    
} 