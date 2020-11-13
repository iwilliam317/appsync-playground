/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
      id
      name
      manager {
        id
        name
        age
      }
    }
  }
`;
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
      id
      name
      manager {
        id
        name
        age
      }
    }
  }
`;
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
      id
      name
      manager {
        id
        name
        age
      }
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      name
      age
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      name
      age
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      name
      age
    }
  }
`;
