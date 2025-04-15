import { Inter } from 'next/font/google'
import "./globals.css";
import Footer from "@/Components/Footer/Footer";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})


export const metadata = {
  title: "BlueHolding Gamified LMS Solution",
  template: "BlueHolding LMS",
  description: "Engage and train your workforce with BlueHolding's innovative gamified learning management system. Boost knowledge retention and employee performance.",
   keywords: ["gamified LMS", "corporate training", "medical", "employee training", "learning management system"],
    authors: [{ name: "BlueHolding", url: "https://blueholding.co.uk/" }],
    creator: "BlueHolding",
    publisher: "BlueHolding",
    category: "medical",
  icons : {
    icon : "/favicon.svg",
  }
};

export default function RootLayout({ children }) {
  return (
        <html lang="en" className={inter.variable}>
        <body>
          <main>{children}</main>
          <Footer/>
        </body>
      </html>
  );
}
