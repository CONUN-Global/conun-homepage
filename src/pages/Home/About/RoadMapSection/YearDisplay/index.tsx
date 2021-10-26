import Card from "@/components/Card";

const FIRST = ["Jan", "Feb", "Mar"];
const SECOND = ["Apr", "May", "Jun"];
const THIRD = ["Jul", "Aug", "Sep"];
const FOURTH = ["Oct", "Nov", "Dec"];

export type YearObj = {
  monthId: string;
  month: JSX.Element;
  title: JSX.Element;
  subtitle: JSX.Element;
};

export type YearDisplayProps = {
  year: YearObj;
};

function YearDisplay({ year }: YearDisplayProps) {
  const { monthId, month, title, subtitle } = year;
  console.log("monthId", month);
  return (
    <div>
      <div>
        <h2>Quarter Four</h2>
        {FOURTH.includes(monthId) && (
          <Card
            header={month}
            title={title}
            description={subtitle}
            size="small"
          />
        )}
      </div>

      <div>
        <h2>Quarter Three</h2>
        {THIRD.includes(monthId) && (
          <Card
            header={month}
            title={title}
            description={subtitle}
            size="small"
          />
        )}
      </div>

      <div>
        <h2>Quarter Two</h2>
        {SECOND.includes(monthId) && (
          <Card
            header={month}
            title={title}
            description={subtitle}
            size="small"
          />
        )}{" "}
      </div>

      <div>
        <h2>Quarter One</h2>
        {FIRST.includes(monthId) && (
          <Card
            header={month}
            title={title}
            description={subtitle}
            size="small"
          />
        )}{" "}
      </div>
    </div>
  );
}
export default YearDisplay;
