import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddFact() {
  async function handleAddFact(formData) {
    "use server";


    const title = formData.get("title");
    const link = formData.get("link");
    const content = formData.get("content");

    await sql`
      INSERT INTO facts (title, link, content)
      VALUES (${title}, ${link}, ${content})
    `;

    revalidatePath("/");

    redirect("/");
  }

  return (
    <div>
      <h2>Add your fact!</h2>
      <form action={handleAddFact}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" placeholder="Title" required />

        <label htmlFor="link">Link</label>
        <input type="text" name="link" id="link" placeholder="Link" required />

        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" placeholder="Content" required />

        <button type="submit">Add Fact</button>
      </form>
    </div>
  );
}