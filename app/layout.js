import { Prompt } from "next/font/google";
import "./globals.css";

const promptFont = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["400"],
});

export const metadata = {
  title: "Badminton",
  description: "my favorite sports",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${promptFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
