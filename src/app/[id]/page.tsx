interface ArtObjectDetail {
    id: string;
    title: string;
    description?: string;
    primaryimageurl?: string;
    culture?: string;
    period?: string;
  }
  
  async function getArtObjectDetail(id: string) {
    const apiKey = process.env.HARVARD_API_KEY;
    const res = await fetch(`https://api.harvardartmuseums.org/object/${id}?apikey=${apiKey}`);
    if (!res.ok) {
      throw new Error('Failed to fetch art object'); 
    }
    return res.json() as Promise<ArtObjectDetail>;
  }
  
  export default async function ArtDetail({
    params,
    searchParams,
  }: {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }) {
    let detail: ArtObjectDetail;
    try {
      detail = await getArtObjectDetail(params.id);
    } catch (error) {
      console.error(error);
      return <div>Error loading art object details. Please try again later.</div>;
    }
  
    return (
      <div>
        <h2>{detail.title}</h2>
        {detail.primaryimageurl && (
          <img src={`${detail.primaryimageurl}`} alt={detail.title} />
        )}
        {detail.description && <p>{detail.description}</p>}
        {detail.culture && <p>
          <strong>Culture:</strong> {detail.culture}
        </p>}
        {detail.period && <p>
          <strong>Period:</strong> {detail.period}
        </p>}
      </div>
    );
  }
  