import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wastênio da Silva Rocha | Software Engineer",
  description:
    "Portfólio profissional de Wastênio da Silva Rocha, Software Engineer Backend / Full Stack com experiência em Java, Spring Boot, Python, Django, React, SQL, CI/CD e sistemas críticos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
