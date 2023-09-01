import { ContextProvider } from "@/context";
import "./index.scss";
import { Metadata } from "next";

export const metadata = {
  title: "nectar-weather-vault",
  description:
    "A Vault to store multimedia documents disguised as a Weather APP",
  manifest: "/manifest.json",
  icons: { apple: "/icon.png" },
  themeColor: "#3281a8",
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
