import Link from 'next/link';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A personal portfolio showcasing my skills and projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-red-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Alex Mustapha</h1>
        <ul className="flex space-x-4">
        <li>
            <Link href="/">
              <span style={{ color: 'green', textDecoration: 'underline', cursor: 'pointer' }}>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span style={{ color: 'green', textDecoration: 'underline', cursor: 'pointer' }}>About</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span style={{ color: 'green', textDecoration: 'underline', cursor: 'pointer' }}>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <span style={{ color: 'green', textDecoration: 'underline', cursor: 'pointer' }}>contacts</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center p-4 mt-8">
      &copy; 2025 Alex Mustapha. All rights reserved.
    </footer>
  );
}
