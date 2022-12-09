export default function EmployeeListItem({ name, title, img }) {
  return (
    <div className="employee">
      <img src={img} className="listImage" alt={img} />
    </div>
  );
}
