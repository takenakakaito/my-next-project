import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
export default function Header(){
    return(
        <header className={styles.header}>
            <Link href="/" className={styles.header}>
                <Image
                    src="/logo.svg"
                    alt="SIMPLE"
                    width={348}
                    height={133}
                    priority
                />
            </Link>
            <nav>
                <ul className={styles.items}>
                    <li>
                        <Link href="/member">メンバー</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}