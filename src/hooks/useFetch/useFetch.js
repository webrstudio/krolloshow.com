'use client'
import { useState, useEffect } from "react";

export const useFetch = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data){
        setData(data)
        setIsLoading(false)
      };
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, isLoading };
};
