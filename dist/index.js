"use strict";
let emp1 = {
    fullName: ["John", "Doe"],
    age: 30,
    department: "Engineering",
    skills: ["JavaScript", "Python", "C++"],
    isActive: true
};
let emp2 = {
    fullName: ["Jane", "Smith"],
    age: 25,
    department: "Marketing",
    skills: ["SEO", "Social Media", "Content Creation"],
    isActive: false
};
function logEmployee(employee) {
    console.log("--Employee Details--");
    console.log(`Name: ${employee.fullName}`);
    console.log(`Age: ${employee.age}`);
    console.log(`Department: ${employee.department}`);
    console.log(`Skills: ${employee.skills}`);
    console.log(`Active: ${employee.isActive ? "Yes" : "No"}`);
}
logEmployee(emp1);
logEmployee(emp2);
