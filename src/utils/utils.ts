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