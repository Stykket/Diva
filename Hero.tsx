import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIVA — Искусство отдыха",
  description: "Премиальное постельное бельё из длинноволокнистого хлопкового сатина."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
