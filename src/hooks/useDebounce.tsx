import { useState, useEffect } from "react";

function useDebounce(value: any, delay: number) {
  // State untuk menyimpan nilai terakhir
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set timeout untuk menunda pemanggilan fungsi
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Membersihkan timeout setiap kali nilai berubah
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Hanya memanggil effect jika value atau delay berubah

  return debouncedValue;
}

export default useDebounce;
