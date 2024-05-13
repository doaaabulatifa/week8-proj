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
              <h3 className={styles.title}>Fact Title: {fact.title}</h3>
              <p className={styles.content}>Fact Content: {fact.content}</p>
              <p className={styles.link}>
                Fact Source: {fact.link}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
