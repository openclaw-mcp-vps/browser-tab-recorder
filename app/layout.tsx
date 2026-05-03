import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Browser Tab Recorder — Record and replay browser workflows as tests",
  description: "Record user interactions in browser tabs and convert them into automated test scripts or workflow documentation. Built for QA engineers and developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b1ffa069-f70f-4868-819e-972c61b6b391"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
