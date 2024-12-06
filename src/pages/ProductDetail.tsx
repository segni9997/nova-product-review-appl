import { NavBar } from "../components/NavBar";
import phone2 from "../assets/images/pro2.jpg";
import {  Delete, Edit, Loader, Plus, Star } from "react-feather";
import "../assets/css/style.css"
import { Form } from "../components/Form";
import { ReviewCard } from "../components/ReviewCards";
import { Button, Flex } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import { useReviewListQuery } from "../hooks/useReviewsQuery";
import { useParams } from "react-router-dom";
import { useProductQuery } from "../hooks/useprodutsQuery";
export const productreview = [
  {
    "id": 1,
    "profileImage": phone2,
    "rating": 4.5,
    "reviewText": " This product is amazing! It exceeded my expectations. This product is amazing! It exceeded my expectations. This product is amazing! It exceeded my expectations.",
    "reviewerName": "John Doe"
  },
  {
    "id": 2,
    "profileImage": phone2,
    "rating": 4.2,
    "reviewText": "Good quality and value for the price. Highly recommend! Good quality and value for the price. Highly recommend!",
    "reviewerName": "Jane Smith"
  },
  {
    "id": 3,
    "profileImage": phone2,
    "rating": 3.8,
    "reviewText": "Decent product but could use some improvements in durability.",
    "reviewerName": "Alice Johnson"
  },
  {
    "id": 4,
    "profileImage": phone2,
    "rating": 5.0,
    "reviewText": "Absolutely fantastic! Will definitely buy again.",
    "reviewerName": "Bob Williams"
  },
  {
    "id": 5,
    "profileImage": phone2,
    "rating": 4.7,
    "reviewText": "Great features and very easy to use. Highly satisfied.",
    "reviewerName": "Chris Davis"
  },
  {
    "id": 6,
    "profileImage": phone2,
    "rating": 4.0,
    "reviewText": "Pretty good overall, but delivery was slightly delayed.",
    "reviewerName": "Emma Wilson"
  },
  {
    "id": 7,
    "profileImage": phone2,
    "rating": 3.5,
    "reviewText": "Average performance, but the design is nice.",
    "reviewerName": "Michael Brown"
  },
  {
    "id": 8,
    "profileImage": phone2,
    "rating": 4.8,
    "reviewText": "Excellent quality! Surpassed all my expectations.",
    "reviewerName": "Sophia Lee"
  },
  {
    "id": 9,
    "profileImage": phone2,
    "rating": 4.3,
    "reviewText": "Good value for money and works as advertised.",
    "reviewerName": "James Taylor"
  },
  {
    "id": 10,
    "profileImage": phone2,
    "rating": 4.6,
    "reviewText": "Well-designed and performs very well. A solid choice.",
    "reviewerName": "Mia Harris"
  },
  {
    "id": 11,
    "profileImage": phone2,
    "rating": 3.9,
    "reviewText": "Not bad, but there are better options out there.",
    "reviewerName": "Ethan Anderson"
  },
  {
    "id": 12,
    "profileImage": phone2,
    "rating": 4.9,
    "reviewText": "Outstanding performance and superb customer service.",
    "reviewerName": "Olivia Martinez"
  },
  {
    "id": 13,
    "profileImage": phone2,
    "rating": 4.4,
    "reviewText": "Met most of my expectations. Good for everyday use.",
    "reviewerName": "Liam Thompson"
  },
  {
    "id": 14,
    "profileImage": phone2,
    "rating": 4.1,
    "reviewText": "Overall a good purchase, though slightly overpriced.",
    "reviewerName": "Ava White"
  },
  {
    "id": 15,
    "profileImage": phone2,
    "rating": 5.0,
    "reviewText": "Exceptional quality and performance. Highly recommended!",
    "reviewerName": "William Green"
  },
  {
    "id": 16,
    "profileImage": phone2,
    "rating": 5.0,
    "reviewText": "Exceptional quality and performance. Highly recommended!",
    "reviewerName": "William Green"
  },
  {
    "id": 17,
    "profileImage": phone2,
    "rating": 5.0,
    "reviewText": "Exceptional quality and performance. Highly recommended!",
    "reviewerName": "William Green"
  },
  {
    "id": 18,
    "profileImage": phone2,
    "rating": 5.0,
    "reviewText": "Exceptional quality and performance. Highly recommended!",
    "reviewerName": "William Green"
  },
  {
    "id": 19,
    "profileImage": phone2,
    "rating": 5.0,
    "reviewText": "Exceptional quality and performance. Highly recommended!",
    "reviewerName": "William Green"
  },
  {
    "id": 20,
    "profileImage": phone2,
    "rating": 5.0,
    "reviewText": "Exceptional quality and performance. Highly recommended!",
    "reviewerName": "William Green"
  },
]

export const ProductDetail: React.FC = () => {
  // const {data:}
  const { id } = useParams();
  const {  data:product, } = useProductQuery(id || "")
  const {data, status, error} = useReviewListQuery(id || "")
  if (status === "loading") return <Loader />;
  if (status === "error") return <span>Error{error?.message}</span>;
  //  rating
  const totalreviews = data?.length || 0;
  const totalrating = data?.reduce((sum, review) => sum + review.rating, 0) || 0;
  const averegerating = totalrating / totalreviews;
  console.log("averege rating", averegerating)
  return (
    <>
      <NavBar />
      <section className="w-full flex flex-col p-3 mt-10 ">
        <h2 className="font-bold text-secondary text-4xl text-left ml-2 flex flex-row items-center" >
        <img
               src={product?.imageUrls[0] || phone2}
                alt="big image"
                className="w-10 h-10 rounded-full border border-primary"
              /> {product?.name}  
        </h2>
        <Flex direction="row" justify="flex-end" gap={3}>
        <Button component="a" href={`/manage-product`} variant="outline" color="green"><Plus/></Button>
        <Button component="a" href={`/edit-product/${id}`} variant="outline" color="orange"><Edit/></Button>
        <Button component="a" href={`/products/${id}`} variant="outline" color="red"><Delete/></Button>
        </Flex>
        <div className="p-2  w-[95%] max-w-[1440px] flex flex-col  lg:flex-row   mx-auto justify-center items-center">
          <div className=" flex flex-col md:flex-row   justify-center items-center  lg:flex-col md:w-full lg:w-1/2 gap-3 w-[95%] mt-5">
            <div className=" w-full ">
              <img
                src={product?.imageUrls[0] || phone2}
                alt="big image"
                className="w-full h-[400px] rounded-xl"
              />
            </div>
            <div className=" flex md:w-1/3 flex-row md:flex-col lg:flex-row w-full  mt-5 justify-center  gap-3">
              <img
               src={product?.imageUrls[0] || phone2}
                alt="big image"
                className="w-24 h-24 rounded-xl border"
              />
              <img
               src={product?.imageUrls[0] || phone2}
                alt="big image"
                className="w-24 h-24 rounded-xl"
              />
              <img
               src={product?.imageUrls[0] || phone2}
                alt="big image"
                className="w-24 h-24 rounded-xl"
              />
            </div>
          </div>
          <div className=" flex flex-col w-full lg:w-1/2  justify-center items-center gap-3 mt-5">
            <span className="font-bold text-2xl text-secondary">
              Description{" "}
            </span>
            <p className="w-[90%]  text-balance text-center ">
             {product?.description}
            </p>
            <div className="flex flex-row gap-3 w-full justify-center items-center">
              <div className="w-20 h-20  rounded-xl  flex flex-row justify-center items-center  text-primary bg-secondary">
                <span className="font-bold text-xl">{averegerating || 0}</span>
                <Star />
              </div>
              <div className="w-20 h-20  rounded-xl  flex flex-col justify-center items-center  text-red-400 bg-teritary">
                <span>discount</span>
                <span>{product?.discount}</span>
              </div>
              <div className="w-20 h-20  rounded-xl  flex flex-col justify-center items-center  text-white bg-primary">
                <span>Price</span>
                <span>${product?.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center w-full p-5">
        <h2 className="text-primary text-3xl w-full text-start font-extrabold mb-5">
          Product Review
        </h2>
        {
          data && data.length > 0 ?
        <Carousel   withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
              loop
              
          align={data && data.length > 5 ? "start" : "center"}
          className={data && data.length > 4 ? "w-full" : "lg:w-1/2"}
      slidesToScroll={1}>
      {data &&  data.slice(0,10).map((review, index) => (
        <ReviewCard key={index} {...review}  />
      )) }
    </Carousel>: <div className="text-red-600 font-light">There is no Reviews For This Product</div>}

       
        
        {
          data && data.length > 20 &&
          <Button
          component="a"
              href={`/review/${product?.id}`}
              variant="filled"
              color="#ED930C"
              radius="xl"
        >
          More Reviews &rarr;
        </Button>
       } 
      </section>
      <section>
        <div className="md:w-[40%] w-[90%] mx-auto  p-3 justify-center  items-center ">
          
         
              <Form/>
               </div>
      </section>
      
    </>
  );
}
