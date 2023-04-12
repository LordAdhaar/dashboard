import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "./Navbar.js"
import Dashboard from "./Dashboard.js"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Dashboard/>
    </div>
    )
}
