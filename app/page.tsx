import Image from "next/image";
import Link from "next/link";
import AddToChart from "./components/AddToChart";

export default function Home() {
  return (
    <main><h1>Hello,world</h1>
    <Link href="/users">Users</Link>
    <AddToChart />
    </main>
  )
}