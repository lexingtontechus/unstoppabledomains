import Header from "./components/header";
import Footer from "./components/footer";
import "/styles/index.css";
import "/styles/globals.css";
import { Providers } from "./providers";
//import Cal from "./components/cal";
export const metadata = {
  title: {
    default: "Lexington Demo",
    template: "%s | Lexington Demo",
  },
  description:
    "A Lexington Demo build with Next.js App Router + Daisyui + Clerkdev features such as nested layouts, instant loading states, streaming, and component level data fetching.",
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
        </body>
      </html>
  );
}
