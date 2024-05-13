

import {Reem_Kufi } from "next/font/google";
import style from "@/componants/footer/footer.module.css"


const reem = Reem_Kufi({ subsets: ["arabic"] });



export default function Footer() {
    return (
      
        <footer className={style.footerStyle} >
          <h6>FactHub</h6>
       
   
        </footer>
       
    )
    
} 