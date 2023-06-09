export type Employee = {
    id: string;
    name: string;
    surname: string;
    email: string;
    image: string;
    phone: string;
    position: string;
  };

export const postEmployee = async (employee: Employee) => {
  const response = await fetch("http://localhost:3000/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
  const data = await response.json();
  return data;
};

export const getEmployees = async () => {
  const response = await fetch("http://localhost:3000/employees", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
export const searchEmployees = async (keyword: string) => {
  const response = await fetch(`http://localhost:3000/employees?name=${keyword}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const getEmployee = async (employeeId: string | 
    undefined) => {
    const response = await fetch(`http://localhost:3000/employees/${employeeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };

export const updateEmployee = async (
  employeeId: string,
  employee: Employee
) => {
  const response = await fetch(
    `http://localhost:3000/employees/${employeeId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    }
  );
  const data = await response.json();
  return data;
};
export const deleteEmployee = async (employeeId: string) => {
  const response = await fetch(
    `http://localhost:3000/employees/${employeeId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};
