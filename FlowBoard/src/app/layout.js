import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "FlowBoard",
  description: "Effortlessly Manage Your Tasks with real-time updates and collaborative dashboards to help you keep track of your team’s progress.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
