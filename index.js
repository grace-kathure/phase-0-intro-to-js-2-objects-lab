// Write your solution in this file!
const employee = {
    firstName: "Sam", streetAddress: "1919 Katheri"
}
function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = {...employee}
    newEmployee["streetAddress"] = "11 Broadway"
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee["streetAddress"] = "12 Broadway"
    return employee
}
const newEmployee = {...employee}
function deleteFromEmployeeByKey(obj, key){
    delete newEmployee.firstName
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete employee[key];
    return employee
    console.log(employee)
}
    