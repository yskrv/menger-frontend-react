import { useQuery } from "react-query";
import { getAllFeedback } from "../api/feedback";
import { Feedback } from "../utils/interfaces/feedbackInterfaces";

export const useFeedback = () => {
  return useQuery<Feedback[], Error>('courses', getAllFeedback);
};
