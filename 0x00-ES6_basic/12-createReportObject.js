export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: {
      /** defining this function */
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return obj;
}
