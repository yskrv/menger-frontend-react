import { Course } from "./interfaces/general";

export const filterCoursesByPrice = (courses: Course[], minPrice: number, maxPrice: number): Course[] => {
  return courses.filter(course => {
    const price = parseFloat(course.price);
    return price >= minPrice && price <= maxPrice;
  });
}

export const getMaxCoursePrice = (courses: Course[]): number => {
  let maxPrice = 0;
  courses.forEach(course => {
    const price = parseFloat(course.price);
    if (price > maxPrice) {
      maxPrice = price;
    }
  });

  return maxPrice;
}

export function generatePassword(length: number = 10): string {
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;':\",.<>/?";

  const allCharacters = upperCaseLetters + lowerCaseLetters + numbers + symbols;

  let password = "";

  password += upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));
  password += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += symbols.charAt(Math.floor(Math.random() * symbols.length));

  for (let i = password.length; i < length; i++) {
    password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
  }

  return password.split('').sort(() => 0.5 - Math.random()).join('');
}

