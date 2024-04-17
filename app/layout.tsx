import Providers from "src/providers";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-gray-900">
      <body className="h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
