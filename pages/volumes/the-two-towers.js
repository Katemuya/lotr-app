import Image from "next/image";
import Link from "next/link";
import { volumes } from "@/lib/data";

export default function TheTwoTowersPage() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <Link href={"/volumes"}>All volumes</Link>
      <h1>{volume.title} </h1>
      <p>{volume.description}</p>

      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            <strong>{`${book.ordinal} : ${book.title}`} </strong>
          </li>
        ))}
      </ul>
      <div>
        <Image src={volume.cover} width={140} height={230} alt="volume cover" />
      </div>
      <div>
        <ul>
          <Link href="/volumes/the-fellowship-of-the-ring">
            Previous Volume{" "}
          </Link>
        </ul>
        <ul>
          <Link href="/volumes/the-return-of-the-king">Next Volume </Link>
        </ul>
      </div>
    </>
  );
}
