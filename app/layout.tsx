import './globals.css'

export const metadata = {
  title: 'PeoplePlus form clone',
  description: 'PeoplePlus form clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
