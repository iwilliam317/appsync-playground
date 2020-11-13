/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
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
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        manager {
          id
          name
          age
        }
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      name
      age
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        age
      }
      nextToken
    }
  }
`;
