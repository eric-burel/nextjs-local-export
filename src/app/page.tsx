"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Home</div>
      <div>
        <p>
          <Link href="./intro.html">About us</Link>
        </p>
        <p>
          <Link href="./getting-started.html">Get pumped up fam</Link>
        </p>
        <p><button onClick={() => {
          window.history.pushState({ seen: "intro" }, "", "./intro.html")
        }}>PushState</button></p>
      </div>
    </main>
  );
}
