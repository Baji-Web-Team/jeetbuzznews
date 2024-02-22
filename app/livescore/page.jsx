// pages/livescore.jsx

import SportsEventsTable from '@/components/SportsEventsTable'; // Adjust the path as needed

export async function getData() {
  const res = await fetch('https://rest.entitysport.com/v2/competitions?token=568b09ee5227b045055e39889fd42b35');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function LivescorePage() {
  try {
    const data = await getData();

    if (!data || !data.response || !data.response.items) {
      throw new Error('Invalid data structure from the API');
    }

    const sportsData = data.response.items;

    return (
      <div>
        <h1 className="flex items-center justify-center">Your Next.js App</h1>
        {sportsData.length > 0 ? (
          <SportsEventsTable sportsData={sportsData} />
        ) : (
          <p>No sports data available</p>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error fetching or processing data:', error.message);

    return (
      <div>
        <h1 className="flex items-center justify-center">Error Loading Data</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}
