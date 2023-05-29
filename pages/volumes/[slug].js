import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);
  const volume = volumes.find((volume) => volume.slug === slug);

  const page = volumes.indexOf(volume);

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
        <Image src={volume.cover} width={140} height={230} alt={volume.slug} />
      </div>

      <div>
        {page === 0 ? (
          <></>
        ) : (
          <Link href={`/volumes/${volumes[page - 1].slug}`}>
            Previous Volume
          </Link>
        )}

        {page === volumes.length - 1 ? (
          <></>
        ) : (
          <Link href={`/volumes/${volumes[page + 1].slug}`}>Next Volume</Link>
        )}
      </div>
    </>
  );
}
