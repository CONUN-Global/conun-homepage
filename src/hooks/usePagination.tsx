import { useState } from "react";

const usePagination = (
  pageSize: number,
  dataset: any[],
  selectedPage?: number
) => {
  const [currentPage, setCurrentPage] = useState(selectedPage || 0);

  const currentData = dataset.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  const handleNext = () => {
    if (currentPage * pageSize + pageSize < dataset.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage * pageSize > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return { currentData, handleNext, handlePrev, currentPage, setCurrentPage };
};

export default usePagination;
