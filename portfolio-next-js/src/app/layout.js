
import "./globals.css";

export const metadata = {
  title: "Fatma Dhouib | DevSecOps Portfolio",
  description:
    "DevSecOps and Cloud Computing portfolio featuring projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
