import { sql } from "@vercel/postgres";
import styles from "./Page.module.css";

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
    <div className={styles.container}>
      <p className={styles.id}>{fact.id}</p>
      <h2 className={styles.title}>{fact.title}</h2>
      <p className={styles.content}>{fact.content}</p>
      <p className={styles.link}>{fact.link}</p>
    </div>
  );
}
