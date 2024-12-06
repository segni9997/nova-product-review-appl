import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { ReviewCard } from "../components/ReviewCards";
import { useReviewListQuery } from "../hooks/useReviewsQuery";
import { Loader } from "react-feather";

export const Review = () => {
  const { id } = useParams();
  const {data, status, error} = useReviewListQuery(id || "")
  if (status === "loading") return <Loader />;
  if (status === "error") return <span>Error{error?.message}</span>;

  return (
    <>
      <NavBar/>
      <section className="p-4">
      <div className="flex flex-wrap justify-center items-center  w-full ">
        {data && data.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
    </>
  );
};
