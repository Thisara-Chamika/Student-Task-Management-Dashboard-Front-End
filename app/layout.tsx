export const metadata = {
  title: "Student Task Management",
  description: "Manage student tasks easily",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
