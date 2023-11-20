import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setDatos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Agrega la dependencia url para que useEffect se ejecute cuando cambie la URL.

  return { datos, loading, error };
};
