import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import Redux from '$lib/client/Redux';

import './layout.css';
import './layout.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'My Next App',
    description: 'Next boilerplate'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Redux>
                    <div id="app">
                        <main className="main">
                            {children}
                        </main>
                    </div>
                </Redux>
            </body>
        </html>
    );
}