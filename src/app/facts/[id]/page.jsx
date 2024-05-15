
import { sql } from "@vercel/postgres";
import styles from "./Page.module.css";
import AddComment from "../../../componants/comments/AddComment";

export async function generateMetadata({ params }) {
  const factId = params.id;
  const result = await sql`SELECT * FROM facts WHERE fact_id = ${factId}`;
  const fact = result.rows[0];
  return {
    title: `Fact hub: ${fact.title}`,
    description: `This is a post about ${fact.content}`,
  };
}

export default async function Page({ params }) {
  const factId = params.id;
  const result = await sql`SELECT * FROM facts WHERE fact_id = ${factId}`;
  const fact = result.rows[0];
  
  return (
    <>
    <div className={styles.container}>
      <p className={styles.id}>{fact.id}</p>
      <h2 className={styles.title}>{fact.title}</h2>
      <p className={styles.content}>{fact.content}</p>
      <p className={styles.link}>{fact.link}</p>
    </div>
    <AddComment />
   
    </>
  );
}
// -- CREATE TABLE comments (
//   --     comment_id SERIAL PRIMARY KEY,
//   --     fact_id INT REFERENCES facts(fact_id),
//   --     user_id INT REFERENCES users(user_id),
//   --     comment_text TEXT NOT NULL
//   -- );