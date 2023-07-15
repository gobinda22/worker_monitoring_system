import React, { useState } from "react";
import avatar from "../../../assets/avatar.png";
import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";

const Employees = () => {
  // Dummy employee data
  const employeesData = [
    {
      id: 1,
      name: "John Doe",
      position: "Laundry Operator",
      department: "Operations",
      avatar: avatar,
      status: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Software Engineer",
      department: "Engineering",
      avatar: avatar,
      status: "active",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Sales Manager",
      department: "Sales",
      avatar: avatar,
      status: "inactive",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Graphic Designer",
      department: "Design",
      avatar: avatar,
      status: "inactive",
    },
    {
      id: 5,
      name: "David Wilson",
      position: "Accountant",
      department: "Finance",
      avatar: avatar,
      status: "active",
    },
    {
      id: 6,
      name: "Sarah Thompson",
      position: "Human Resources Manager",
      department: "Human Resources",
      avatar: avatar,
      status: "inactive",
    },
    {
      id: 7,
      name: "Robert Garcia",
      position: "Customer Service Representative",
      department: "Customer Service",
      avatar: avatar,
      status: "active",
    },
    {
      id: 8,
      name: "Olivia Martinez",
      position: "Marketing Specialist",
      department: "Marketing",
      avatar: avatar,
      status: "inactive",
    },
    {
      id: 9,
      name: "William Clark",
      position: "Operations Manager",
      department: "Operations",
      avatar: avatar,
      status: "active",
    },
    {
      id: 10,
      name: "Sophia Lee",
      position: "Product Manager",
      department: "Product Management",
      avatar: avatar,
      status: "inactive",
    },
    // Add more employees here
  ];

  const [employees, setEmployees] = useState(employeesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const handleEditEmployee = (employeeId) => {
    // Handle the edit functionality here
    console.log(`Edit employee with ID: ${employeeId}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    if (filter === "all") {
      return employee.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return (
        employee.department.toLowerCase() === filter.toLowerCase() &&
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  const sortedEmployees = filteredEmployees.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "position") {
      return a.position.localeCompare(b.position);
    } else {
      return a.id - b.id;
    }
  });

  return (
    <div className="p-6 ml-60 mt-14">
      <Navbar />
      <Sidebar />
      <h1 className="text-2xl font-semibold mb-4">Employees</h1>
      <div className="bg-white space-y-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="md:mb-0">
            <input
              type="text"
              placeholder="Search employees"
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg text-sm"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label htmlFor="filter" className="font-medium text-sm">
                Filter by Department:
              </label>
              <select
                id="filter"
                className="w-40 px-4 py-2 border border-gray-300 rounded-lg text-sm"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                {/* Add more departments here */}
              </select>
            </div>
            <div>
              <label htmlFor="sort" className="font-medium text-sm">
                Sort by:
              </label>
              <select
                id="sort"
                className="w-40 px-4 py-2 border border-gray-300 rounded-lg text-sm"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="name">Name</option>
                <option value="position">Position</option>
                {/* Add more sorting options here */}
              </select>
            </div>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left text-sm">Name</th>
              <th className="text-left text-sm">Position</th>
              <th className="text-left text-sm">Department</th>
              <th className="text-left text-sm">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedEmployees.map((employee) => (
              <tr key={employee.id}>
                <td className="py-4">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src={employee.avatar}
                      alt={employee.name}
                    />
                    {employee.name}
                  </div>
                </td>
                <td className="py-4 text-sm">{employee.position}</td>
                <td className="py-4 text-sm">{employee.department}</td>
                <td className="py-4 text-sm">
                  {employee.status === "active" ? (
                    <span className="text-green-600 font-semibold">Active</span>
                  ) : (
                    <span className="text-red-600 font-semibold">On Leave</span>
                  )}
                </td>
                <td className="py-4">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-customColorTwo rounded-lg hover:bg-customColor"
                    onClick={() => handleEditEmployee(employee.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
