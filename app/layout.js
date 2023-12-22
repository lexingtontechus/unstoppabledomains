import Header from "./components/header";
import Footer from "./components/footer";
import "/styles/index.css";
import "/styles/globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    default: "Lexington Demo",
    template: "%s | Lexington Demo",
    viewport: {
      width: 1,
    },
  },
  description:
    "A Lexington Demo build with Next.js App Router + Unstoppable Domains.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
