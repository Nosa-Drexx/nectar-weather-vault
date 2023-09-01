import { ContextProvider } from "@/context";
import "./index.scss";
import { Metadata } from "next";

export const metadata = {
  title: "jamit test pwa",
  description: "test",
  manifest: "/manifest.json",
  icons: { apple: "/icon.png" },
  themeColor: "#fff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ContextProvider>
        <body>{children}</body>
      </ContextProvider>
    </html>
  );
}
