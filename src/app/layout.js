import './styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
export const metadata ={
  icons:{
    icon: '/assets/images/krollo-logo.jpg'
  }
}
