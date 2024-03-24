import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router.js";

//The start page that shows all the links(volumes) and has a "go to random volume" button
export default function HomePage() {
  const router = useRouter();
  function handleRandomValueButton() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const { volumeSlug } = router.query;
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
