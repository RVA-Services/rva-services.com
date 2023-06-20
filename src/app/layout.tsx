import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "RVA Services",
    description: "Custom software development and consultancy services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${outfit.className}`}>
                <main className="min-h-screen">
                    <div className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 text-white/75 flex min-h-screen flex-col items-center justify-center text-white">{children}</div>
                </main>
            </body>
        </html>
    );
}
