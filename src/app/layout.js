import './styles/globals.css'
import { NavBar } from '@/components'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
export const metadata ={
  icons:{
    icon: '/assets/images/krollo-logo.jpg'
  }
}
