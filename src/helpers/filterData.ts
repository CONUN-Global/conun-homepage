export default function filterData(data: any[], searchTerm: string) {
  const searchTermUppercase = searchTerm.trim().toUpperCase();

  const filteredData = data?.filter((item) => {
    return (
      item?.title?.toUpperCase().includes(searchTermUppercase) ||
      item?.caption?.toUpperCase().includes(searchTermUppercase) ||
      item?.description?.toUpperCase().includes(searchTermUppercase)
    );
  });

  return filteredData;
}
