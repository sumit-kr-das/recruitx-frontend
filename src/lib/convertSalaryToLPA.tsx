export default function convertSalaryToLPA(salary: number): string {
  const convertedSalary: number = salary / 100000;
  return `${convertedSalary} LPA`;
}
