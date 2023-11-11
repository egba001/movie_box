import { Inter } from 'next/font/google'
import './ui/globals.css'
import Navbar from './ui/nav'
import { getServerSession } from "next-auth";
import AuthProvider from "@/utils/SessionProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Country API',
  description: 'Developed using Next JS',
}

export default async function RootLayout({ children }) {

  const session = await getServerSession();

  return (
      <html lang="en">
        <AuthProvider session={session}>
        <body className={`${inter.className} bg-dgray h-screen`}>
          <div className='w-full h-[15%]'>
            <Navbar />
          </div>
          <div className='flex justify-center w-full items-center h-[85%]'>
            {children}
          </div>
        </body>
        </AuthProvider>
      </html>
  )
}
