import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Display link to the volume overview.</h1>
      <Link href="/volumes">Volume Overview</Link>
    </div>
  );
}
