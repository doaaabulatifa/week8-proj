
import Link from "next/link";
import { TbSpherePlus } from "react-icons/tb";
import styles from "./header.module.css";
import {Reem_Kufi } from "next/font/google";


const reem = Reem_Kufi({ subsets: ["arabic"] });



export default function Header() {
    return (
        <header className={styles.header}>
        <h1  className={`${styles.logo} ${reem.className}`}><span className={styles.spanlogo}><TbSpherePlus />FactHub</span><span>مصدر الحقائق</span></h1>
     
        <nav className={styles.navbar}>
              <ul className={styles.navLinks}>
        <Link className={styles.navLink} href="/">Home</Link>
        <Link className={styles.navLink}  href="/about">About</Link>
        <Link className={styles.navLink}  href="/facts">Facts</Link>
        <Link className={styles.navLink} href="/factSharers">Factsharers</Link>
        </ul>
        </nav>
   
        </header>
    )
    
} 