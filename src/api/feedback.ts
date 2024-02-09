import axiosInstance from "./instance";
import { Feedback } from "../utils/interfaces/feedbackInterfaces";

type CreateFeedbackDto = Omit<Feedback, "id" | "createdAt">;

export const addFeedback = async (dto: CreateFeedbackDto): Promise<Feedback> => {
  try {
    const res = await axiosInstance.post<Feedback>('/feedback', dto);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export const getAllFeedback = async (): Promise<Feedback[]> => {
  try {
    const { data } = await axiosInstance.get<Feedback[]>('/feedback', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    });
    return data;
  } catch (err) {
    throw err;
  }
}