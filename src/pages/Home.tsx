import { motion } from "framer-motion";
import { NavBar } from "../components/NavBar";
// import cameraLens from "../assets/images/camera lens.jpg";
// import laptop from "../assets/images/laptop.jpg";
// import phone from "../assets/images/phone.jpg";
import phone2 from "../assets/images/pro2.jpg";
// import camera from "../assets/images/camera.jpg";
import { Link } from "react-router-dom";
import { Eye, Star } from "react-feather";
import { useProductslistQuery } from "../hooks/useprodutsQuery";
import { Loader } from "@mantine/core";
export const Home = () => {
    // const [products, setProducts] = useState<Product[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const FetchProducts = async () => {
    //       try {
    //         setLoading(true);
    //           const response = await fetchProducts();
    //           console.log(response.data)
    //         setProducts(response.data);
    //       } catch (err) {
    //         setError("Failed to fetch products");
    //       } finally {
    //         setLoading(false);
    //           }
    //     };
    //     FetchProducts();
    // }, []);
   
  // if (error) return <div>{error}</div>;
  
  const { status, data,error } = useProductslistQuery();
  console.log("Fetched Data", data); // Log data to check its structure
  
  if (status === "loading") return <Loader />;
  if (status === "error") return <span>Error{error?.message}</span>;
  return (
      <>
      
      <section
    className="relative flex flex-col items-center justify-center bg-hero-image text-center bg-cover bg-center min-h-screen text-pretty"
  >
    <NavBar  />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary opacity-70">
              </div> 
    <div className="relative z-10 px-6 md:px-12 flex flex-col items-center justify-center min-h-screen text-white ">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold w-[80%] "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
                  Unbiased Reviews, Trusted Insights
              </motion.h1>
  
      <p className="text-lg sm:text-xl md:text-2xl mt-4 md:mt-8 w-[60%]">
      Discover the best products with expert opinions, detailed ratings, and honest feedback. Your guide to smarter choices starts here      </p>
  
      <motion.a
        href="/products"
        className="p-2 rounded-full bg-secondary mt-6 text-center align-middle text-lg sm:text-xl md:text-2xl hover:scale-105 transform "
                  initial={{
                      opacity: 0,
            y: 50
         }}
                  animate={{
                      opacity: 1,
            y: 0
         }}
        transition={{ delay: 1.0, duration: 1.2 }}
      >
                  Explore &rarr;
              </motion.a>
          </div>
          
          
      </section>
      <section className="items-center justify-center w-full p-2">
        <h1 className="text-primary text-3xl font-extrabold mt-10 mb-5 pl-3">Products</h1>
              
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-7 w-full p-2 justify-center items-center">
                   {data && data.slice(0,6).map((product) => (
                     <div key={product.id} className="border border-primary group card relative rounded-xl w-[350px] h-[200px] ">
                       <img
                         src={product.imageUrls[0] || phone2} // Use product image or fallback image
                         alt={product.name}
                      
                         className="rounded-xl w-[350px] h-[200px]  "  
                       />
                       <div className="absolute top-0 w-full">
                         <div className="justify-between flex flex-row">
                           <span className="font-bold bg-opacity-40 bg-primary rounded-tl-xl rounded-br-xl p-2">
                             {product.use}
                           </span>
                           <span className="font-bold bg-opacity-40 bg-primary rounded-tr-xl rounded-bl-xl p-2">
                             {product.category}
                           </span>
                         </div>
                       </div>
                       <div className="absolute bottom-0 w-full flex justify-between rounded-b-xl">
                         <div className="w-20 h-10 rounded-t-full rounded-bl-xl text-bold bg-secondary justify-center flex flex-row items-center text-center">
                           <span className="text-primary">4.7</span>
                           <Star className="text-primary" />
                         </div>
         
                         <div className="h-10 rounded-tl-full rounded-br-xl w-[45%] px-1 text-bold bg-secondary justify-center flex flex-row items-center text-center">
                           <span className="text-primary text-sm">{product.name}</span>
                         </div>
                       </div>
         
                       <motion.div
                         className="hidden absolute left-0 top-0 w-full h-full bg-opacity-50 bg-secondary rounded-xl group-hover:flex justify-center items-center"
                         initial={{
                           opacity: 0,
                           scale: 0.0,
                         }}
                         animate={{
                           opacity: 1,
                           scale: 0.8,
                         }}
                         transition={{
                           opacity: { duration: 1 },
                           scale: { type: "spring", stiffness: 200, damping: 20 },
                         }}
                         whileHover={{
                           scale: 1.0,
                           opacity: 1,
                           transition: {
                             scale: { duration: 0.3 },
                             opacity: { duration: 0.3 },
                           },
                         }}
                       >
                         <Link to={`/product/${product.id}`} className="transform -translate-x-1/2 -translate-y-1/2">
                           <Eye className="text-primary text-xl" />
                         </Link>
                       </motion.div>
                     </div>
                   ))}
                      <div className="w-full justify-end items-end">
                      <Link to="/products" className="bg-secondary text-white p-1 rounded-full  hover:bg-primary ">More Product &rarr;</Link>
                    </div>
                 </div>
  
        
      </section>

    </>
  );
};
