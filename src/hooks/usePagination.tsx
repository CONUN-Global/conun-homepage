import { useState } from "react";

const usePagination = (pageSize: number, dataset: any[]) => {
  const [currentPage, setCurrentPage] = useState(0);
  console.log(dataset);

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

  return { currentData, handleNext, handlePrev };
};

export default usePagination;
