import Link from 'next/link';
import { StyledDiv, Card, CardImage } from '../styles/page-style'

interface ArtObject {
  id: string;
  title: string;
  primaryimageurl?: string;
}

async function getArtObjects() {
  const apiKey = process.env.HARVARD_API_KEY;
  const res = await fetch(`https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=10`);
  if (!res.ok) {
    throw new Error('Failed to fetch data from Harvard Art Museums API'); // throw error if api is down/other error related to API
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
    return <div>Error fetching art objects. Please try again later.</div>;
  }

  return (
    <div>
      <h2>Art Objects</h2>
      <StyledDiv>
        {artObjects.map((object) => (
          <Card key={object.id}>
            <h3>
              <Link href={`/${object.id}`}>
                {object.title}
              </Link>
            </h3>
            {object.primaryimageurl && (
              <CardImage
                src={`${object.primaryimageurl}?width=150&height=150`}
                alt={object.title}
              />
            )}
          </Card>
        ))}
      </StyledDiv>
    </div>
  );
}
