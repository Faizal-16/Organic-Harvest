import "./globals.css";

export const metadata = {
  title: "OrganicHarvest - Organic Store",
  description: "Providing healthy super organic produce",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
