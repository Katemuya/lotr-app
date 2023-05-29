import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { volumeSlug } = router.query;

  const volume = volumes.find(({ volume }) => volumes.slug === volumeSlug);
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

      {/* <div>
        <Link href={"/volumes/"}>Next Volume</Link>
      </div> */}
    </>
  );
}
