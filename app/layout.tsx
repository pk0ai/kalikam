import type { Metadata } from 'next';
import './globals.css';
import Header from './ui';
export const metadata: Metadata = { title: 'KALIKAM — Stories. Ideas. Perspectives.', description: 'Independent stories, ideas and perspectives from Kalikam.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><Header/>{children}</body></html> }
