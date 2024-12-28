import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  weight : ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: '--font-jetbrainsMono'
});


export const metadata = {
  title: "Amhar Rishan",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}>
        <Header />
        <PageTransition>
          {children}
        </PageTransition>

      </body>
    </html>
  );
}
