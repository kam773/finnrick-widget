import { useEffect, useState } from "react";

interface WidgetData {
  rating: {
    grade: string;
    text: string;
  };
  name: string;
  samples_count: number;
  last_test: string;
}

export function useWidget() {
  const [data, setData] = useState<WidgetData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWidgetData = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Mock API response
        const mockData: WidgetData = {
          rating: {
            grade: "A",
            text: "GREAT",
          },
          name: "Shanghai Innovy Chemical New Materials Tesamorelin, CJC-1295, Ipamorelin",
          samples_count: 6,
          last_test: "19 Feb 2025",
        };

        setData(mockData);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to fetch widget data");
      } finally {
        setLoading(false);
      }
    };

    fetchWidgetData();
  }, []);

  return {data, loading, error};
}
