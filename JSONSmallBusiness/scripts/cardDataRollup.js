//Card should display employee name, department name, and computer name


const cardDataRollup = () =>{
	let empData = ''
	let empDeptData = ''
	let empCompData = ''
	Employees.forEach(person => {
		empData = person.name
		EmployeeDepartments.forEach(relationship => {
			Departments.forEach(department => {
				if (person.employeeId === relationship.employeeId && relationship.departmentId === department.departmentId) {
					empDeptData = department.name
				}
			})
		})
		EmployeeComputers.forEach(compRelationship => {
			Computers.forEach(computer => {
				if (person.employeeId === compRelationship.employeeId && compRelationship.computerId === computer.computerId) {
					empCompData = computer.computerName
				}
			})
		})
		createCard(empData, empDeptData, empCompData)
	})
}