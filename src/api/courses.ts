import axiosInstance from "./instance";
import { Course } from "../utils/interfaces/general";

export const getCourses = async (): Promise<Course[]> => {
  const { data } = await axiosInstance.get<Course[]>('/courses/public');
  return data;
};

export const getCourseById = async (id: number): Promise<Course> => {
  const { data } = await axiosInstance.get<Course>('/courses/' + id);
  return data;
};