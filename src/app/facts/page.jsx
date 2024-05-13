
import { sql } from "@vercel/postgres";
export default async function Facts(){
    const result = await sql`SELECT * FROM facts`;
    console.log(result.rows);
 
    return (
        <div>
            <h1>Facts Provided By You</h1>
            <div>
        {result.rows.map((fact) => {
            
          return (
            <div key={fact.id}>
              <h3>{fact.title}</h3>
              <p>{fact.content}</p>
              <p>{fact.link}</p>
            </div>
          );
        })}
      </div>
        </div>
    )
}