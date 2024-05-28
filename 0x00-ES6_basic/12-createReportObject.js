export default function createReportObject(employeesList) {
  return {
    { ...employeesList },
    getNumberOfDepartments: function(allEmployees) {
      return Object.keys(allEmployees).length;
    }
  };
}
