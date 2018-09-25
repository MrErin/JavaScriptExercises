const createCard = (empName, deptName, compName) => {
	employeeCards.push(Object.create({},{
		employeeName:
        {
        	value: empName,
        	enumerable: true
        },
		departmentName:
        {
        	value: deptName,
        	enumerable: true
        },
		computerName:
        {
        	value: compName,
        	enumerable: true
        }
	}))
}