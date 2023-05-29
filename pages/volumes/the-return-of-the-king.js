import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
export default function TheReturnOfTheKingPage() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <Link href="/volumes">All Volumes</Link>

      <h1>{volume.title}</h1>
      <p>{volume.description}</p>

      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            <strong>{`${book.ordinal} :${book.title}`}</strong>{" "}
          </li>
        ))}
      </ul>
      <div>
        <Image src={volume.cover} width={140} height={230} alt="volume cover" />
      </div>

      <div>
        <ul>
          <Link href="/volumes/the-two-towers">Previous Volume</Link>
        </ul>
      </div>
    </>
  );
}
