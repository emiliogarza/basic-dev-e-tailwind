import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s',
        default: 'Emilio Garza | Developer from California.'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body>
                <Header />
                <main id="main-content" class="centered-layout-container">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
