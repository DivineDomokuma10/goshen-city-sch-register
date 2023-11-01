/* eslint-disable no-unused-vars */
import { v4 as id } from "uuid";

const genWeekStart = (num) => (num === 1 ? 1 : 1 + (num - 1) * 4);

const genWeeks = (weekStart) => {
  let holder = [];
  let weekStartNum = genWeekStart(weekStart);

  for (let i = weekStartNum; i < weekStartNum + 4; i++) holder.push(i);

  return holder;
};

const genCheckBoxes = (studentName) => {
  let holder = [];

  for (let i = 0; i < 20; i++) {
    holder.push({ id: id() + studentName, reason: "" });
  }
  return holder;
};

const genStudentWithCheckBoxes = (students) => {
  let holder = [];

  students.forEach((student) => {
    holder.push({ ...student, checkBoxes: genCheckBoxes(student.name) });
  });

  return holder;
};

export { genWeeks, genStudentWithCheckBoxes };
