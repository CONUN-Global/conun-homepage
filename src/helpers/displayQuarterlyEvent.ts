import { YearObj, YearProps } from "@/types/index";

function displayQuarterlyEvent(year: YearProps, quarter: string[]): YearObj[] {
  const result: YearObj[] = [];
  for (let month in year) {
    if (quarter.includes(month)) {
      year[month].map((data: any) => {
        result.push(data);
      });
    }
  }
  return result;
}

export default displayQuarterlyEvent;
