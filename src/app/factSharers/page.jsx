import { sql } from "@vercel/postgres";
import styles from "./factshare.module.css"



export default async function FactsSharers() {
  const result = await sql`SELECT * FROM users`;
  const users = result.rows;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> FactsSharers</h1>
     
      <div>
        {users.map((user) => (
    
            <div className={styles.fact}>
              <h3 className={styles.title}>username: {user.username}</h3>
              <p className={styles.content}>user email: {user.email}</p>
        </div>
   
        ))}
      </div>
    </div>
  );
}
