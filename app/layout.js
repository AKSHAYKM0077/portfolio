import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akshay Mehta - Software Developer",
  description: "Portfolio website of Akshay Mehta, a Computer Science student and Software Developer. Showcasing projects, skills, and experience in web development and competitive programming.",
  metadataBase: new URL('https://akshay-mehta.dev'),
  icons: {
    icon: '/profile.jpg',
    shortcut: '/profile.jpg',
    apple: '/profile.jpg',
  },
  openGraph: {
    title: 'Akshay Mehta - Software Developer',
    description: 'Portfolio website of Akshay Mehta, a Computer Science student and Software Developer.',
    url: 'https://akshay-mehta.dev',
    siteName: 'Akshay Mehta Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 600,
        alt: 'Akshay Mehta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshay Mehta - Software Developer',
    description: 'Portfolio website of Akshay Mehta, a Computer Science student and Software Developer.',
    images: ['/profile.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
