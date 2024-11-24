
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "Z-MOVIES",
  description: "movie web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={''}
      >
         <Navbar/>
        {children}
      </body>
    </html>
  );
}
