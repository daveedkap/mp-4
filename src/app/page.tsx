// src/app/page.tsx
import Link from 'next/link';
import styles from '../styles/page.module.css';

interface ArtObject {
  id: string;
  title: string;
  primaryimageurl?: string;
}

async function getArtObjects() {
  const apiKey = process.env.HARVARD_API_KEY;
  const res = await fetch(`https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=10`);
  if (!res.ok) {
    throw new Error('Failed to fetch data from Harvard Art Museums API'); // Error handling
  }
  const data = await res.json();
  return data.records as ArtObject[];
}

export default async function Home() {
  let artObjects: ArtObject[] = [];
  try {
    artObjects = await getArtObjects();
  } catch (error) {
    console.error(error);
    return <div>Error fetching art objects. Please try again later.</div>; // Throw error handle
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Art Objects</h2>
      <div className={styles.grid}>
        {artObjects.map((object) => (
          <div className={styles.card} key={object.id}>
            <h3>
              <Link href={`/${object.id}`}>
                {object.title}
              </Link>
            </h3>
            {object.primaryimageurl && (
              <img
                className={styles.image}
                src={`${object.primaryimageurl}?width=150&height=150`}
                alt={object.title}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
