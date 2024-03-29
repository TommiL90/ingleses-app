import NavBar from "@/components/Header";
import "../styles/globals.css";
// eslint-disable-next-line camelcase
import { Roboto_Flex } from "next/font/google";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-roboto",
  style: "normal"
});

export const metadata = {
  title: "Territorio Ingleses",
  description: "Aplicación para encontrar direcciones"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
