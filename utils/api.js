export const fetchSportsData = async () => {
  const apiUrl = 'https://rest.entitysport.com/v2/competitions?token=568b09ee5227b045055e39889fd42b35';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};
