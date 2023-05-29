import Image from "next/image";
import Link from "next/link";
import { volumes } from "@/lib/data";
export default function TheFellowshipOfTheRingPage() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link href="/volumes"> All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description} </p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            <strong>{`${book.ordinal} : ${book.title}`}</strong>{" "}
          </li>
        ))}
      </ul>
      <div>
        <Image src={volume.cover} width={140} height={230} alt="Volume cover" />
      </div>

      <div>
        <Link href="/volumes/the-two-towers">Next Volume</Link>
      </div>
    </>
  );
}
