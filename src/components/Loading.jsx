import { useState, useEffect } from 'react';

function Loading() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2 sekunder loading (kan ändras)
  
      return () => clearTimeout(timer); // Städa upp timern
    }, []);
  
    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-2xl font-bold animate-pulse">Loading...</div>
        </div>
      );
    }
}

export default Loading;