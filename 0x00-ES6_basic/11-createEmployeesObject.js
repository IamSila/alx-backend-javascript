export default function createEmployeeObject(departmentName, employees) {
  const details = {
    [`${departmentName}`]: [
      ...employees,
    ],
  };
  return details;
}
