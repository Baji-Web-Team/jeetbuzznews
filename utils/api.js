export const fetchData = async () => {
    try {
      const response = await fetch('https://rest.entitysport.com/v2/matches/49689/live?token=568b09ee5227b045055e39889fd42b35');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  