import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Provider from "@/components/Provider";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Oluyemi Portfolio",
  description:
    "Am a frontend and Backend developer, a fullstack developer to be precise",
  openGraph: {
    title: "Oluyemi Portfolio",
    description:
      "Am a frontend and Backend developer, a fullstack developer to be precise",
    url: "https://oluyemi.vercel.app",
    siteName: "Oluyemi Portfolio (fullstack)",
    images: {
      url: "/myportfoliopics.png",
      width: 1200,
      height: 630,
      alt: "Oluyemi Portfolio",
    },
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider>
            <Toaster position="top-center" />
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
