import baseConfig from '@sandbox/config/base.config';
import Providers from '@sandbox/infra/react/providers';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: baseConfig.TITLE,
  description: baseConfig.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-slate-700 bg-gradient-to-t from-gray-300 to-gray-100 min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
