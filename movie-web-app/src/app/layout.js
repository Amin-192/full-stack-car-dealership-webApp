
import "./globals.css";



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
        {children}
      </body>
    </html>
  );
}
