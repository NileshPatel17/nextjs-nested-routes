import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
    return (
        <nav className={styles.nav}>
            <input className={styles.input} placeholder="Search..." />
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/[slug]" as="/javascript">
                <a>javascript</a>
            </Link>
            <Link href="/collection/[id]" as="/collection/1">
                <a>collection 1</a>
            </Link>
            <Link href="/collection/[id]" as="/collection/2">
                <a>collection 2</a>
            </Link>
            <Link href="/collection/[id]/[slug]" as="/collection/1/items">
                <a>collection 2 with items</a>
            </Link>
            <Link href="/collection/[id]/[slug]" as="/collection/1/auctions">
                <a>collection 2 with auctions</a>
            </Link>
            <Link href="/nested/[dynamic]" as="/nested/my-folder">
                <a>Dynamic nested Route</a>
            </Link>
            <Link href="/nested/[dynamic]/[id]" as="/nested/my-folder/1">
                <a>Dynamic nested Route 1</a>
            </Link>
            <Link href="/nested/[dynamic]/[id]" as="/nested/my-folder/2">
                <a>Dynamic nested Route 2</a>
            </Link>
        </nav>
    )
}