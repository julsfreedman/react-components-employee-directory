import EmployeeListItem from "./EmployeeListItem";
import EmployeeData from "../data/data";

const employees = EmployeeData.map((ele, index) => {
  return <EmployeeListItem key={index} {...ele} />;
});
export default function EmployeeList(props) {
  return (
    <div>
      <section className="employeeLists">{employees}</section>
    </div>
  );
}
