import Providers from "src/providers";
import "../styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-gray-900">
      <body className="h-full">
        <Providers>{children}</Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
