import { sql } from "@vercel/postgres";
import Link from "next/link";
import styles from "./Facts.module.css";

export default async function Facts() {
  const result = await sql`SELECT * FROM facts`;
  const facts = result.rows;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Interesting Facts</h1>
      <Link  className={styles.btn} href="/addfacts">Add fact</Link>
      <div>
        {facts.map((fact) => (
          <Link href={`/facts/${fact.fact_id}`} key={fact.fact_id} >
            <div className={styles.fact}>
              <h2 className={styles.h2}>Fact Title:</h2>
              <h3 className={styles.title}> {fact.title}</h3>
              <h2 className={styles.h2}>Fact Content:</h2>
              <p className={styles.content}> {fact.content}</p>
              <h2 className={styles.h2}>Fact Source:</h2>
              <p className={styles.link}> {fact.link}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
