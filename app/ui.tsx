'use client';
import Link from 'next/link';
export default function Header(){return <header className="siteHeader"><div className="brand"><Link href="/" className="brandName">KALIKAM<span>.</span></Link><div className="brandTag">STORIES · IDEAS · PERSPECTIVES</div></div><nav className="nav"><Link href="/">Home</Link><a href="/#latest">Latest</a><a href="/#categories">Categories</a><a href="/#about">About</a></nav><Link className="writeLink" href="/editor">EDITOR ↗</Link></header>}
