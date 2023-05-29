import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router.js";

export default function HomePage() {
  const router = useRouter();
  function handleRandomValueButton() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <div>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={"/volumes"}>{title}</Link>
          </li>
        ))}
      </ul>

      <button onClick={handleRandomValueButton}>Go to random volume</button>
    </div>
  );
}
