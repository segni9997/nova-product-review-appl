
import { useQuery } from "react-query";
import { api } from "../api/Api";
import { ReviewList } from "../api/types/type";

export const useReviewListQuery = (productId: string) =>
  useQuery<ReviewList, Error>({
    queryKey: ['reviews', productId], 
    queryFn: () => api.ReviewLists(productId), 
  });
