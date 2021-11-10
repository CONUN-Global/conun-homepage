import DropdownLink from "@/components/Dropdown/DropdownLink";
interface DropdownProps {
  menu: {
    osName: string;
    links: string[];
  };
}
function Dropdown({ menu: { osName, links } }: DropdownProps) {
  return (
    <div>
      <div>{osName}</div>
      {links.map((link: string, i: number) => (
        <DropdownLink key={i} name={osName} link={link} />
      ))}
    </div>
  );
}

export default Dropdown;
