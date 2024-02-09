import { useQuery } from "react-query";
import { getCourseById, getCourses } from "../api/courses";
import { Course } from "../utils/interfaces/general";

export const useCourses = () => {
  return useQuery<Course[], Error>('courses', getCourses);
};

export const useCourseById = (id: number) => {
  return useQuery<Course, Error>(['course', id], () => getCourseById(id), {
  });
};