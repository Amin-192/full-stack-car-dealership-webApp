import "./globals.css";
import Navbar from "./components/Navbar";
import Provider from "./components/Provider";

export const metadata = {
  title: "CarLuxe",
  description: "Luxury Car Rentals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
