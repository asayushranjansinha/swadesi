import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>landing page of my app</h1>
      <Link href="/admin">Admin Route</Link>
    </main>
  );
}
