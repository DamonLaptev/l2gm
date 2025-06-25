import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <div className="">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
