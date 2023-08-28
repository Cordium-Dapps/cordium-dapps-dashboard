import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Cordium dApps',
  description: 'Cordium marketplace for amazing dapps',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={grotesk.className}>{children}</body>
    </html>
  )
}
