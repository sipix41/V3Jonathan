import { useState, useEffect } from 'react';

export const useCityData = (cityName: string) => {
  const [customContent, setCustomContent] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadContent = async () => {
      try {
        const filename = cityName
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/\s+/g, '-')
          .replace(/'/g, '')
          .replace('les-laurentides', 'laurentides')
          .replace('st-', 'saint-');
        const module = await import(`../cityData/${filename}.json`);
        if (isMounted) {
          setCustomContent(module.default || module);
        }
      } catch (err) {
        console.error("Failed to load city data:", err);
        if (isMounted) {
          setCustomContent({});
        }
      }
    };
    loadContent();
    return () => { isMounted = false; };
  }, [cityName]);

  return customContent;
};
