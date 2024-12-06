import { Eye, Filter, Star } from "react-feather";
import { NavBar } from "../components/NavBar";
import Select, { MultiValue, SingleValue, StylesConfig } from "react-select";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import phone2 from "../assets/images/pro2.jpg";
import Pagination from "../components/Pagination";
import { useProductslistQuery } from "../hooks/useprodutsQuery";
import { Loader } from "@mantine/core";

interface OptionType {
  value: string;
  label: string;
}

export default function Products() {
  const useoptions: OptionType[] = [
    { value: "for_rent", label: "for_rent" },
    { value: "for_use", label: "for_use" },
    { value: "Buy", label: "Buy" },
  ];
  const categoryoptions: OptionType[] = [
    { value: "Electronics", label: "Electronics" },
    { value: "Phone", label: "Phone" },
    { value: "Cosmotics", label: "Cosmotics" },
  ];
  const orderoptions: OptionType[] = [
    { value: "Ascending", label: "Ascending" },
    { value: "dec", label: "Descending" },
  ];

  const sortingoptions: OptionType[] = [
    { value: "Name", label: "Name" },
    { value: "Price", label: "Price" },
  ];
  const customStyles: StylesConfig<OptionType, true> = {
    control: (base) => ({
      ...base,
      border: 0,
      borderBottom: "2px solid #ED930C",
      borderRadius: 0,
      boxShadow: "none",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0.5rem",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#ED930C",
      "&:hover": {
        color: "#0056b3",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#0F2051",
    }),
  };
  const customStyle: StylesConfig<OptionType, false> = {
    control: (base) => ({
      ...base,
      border: 0,
      borderBottom: "2px solid #ED930C",
      borderRadius: 0,
      boxShadow: "none",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0.5rem",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#ED930C",
      "&:hover": {
        color: "#0056b3",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#0F2051",
    }),
  };
  // Define the `onChange` handler for multiple values
  const handleChange = (selectedOptions: MultiValue<OptionType>) => {
    console.log(selectedOptions);
  };
  const handleChangesort = (selectedOption: SingleValue<OptionType>) => {
    console.log(selectedOption);
  };

  const { status, data, error } = useProductslistQuery()
  if (status === "loading") return <Loader />;
  if (status === "error") return <span>Error{error?.message}</span>;
  return (
    <>
      <NavBar />
      <section>
        <div className="p-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row  justify-center md:justify-between items-center w-full mb-4 mr-14">
            <h1 className="text-primary font-bold text-3xl text-start">
              products
            </h1>
            <div className="flex justify-center items-center mt-5 md:mr-32 w-full md:w-96 bg-secondary rounded-full ">
              <input
                type="text"
                placeholder="search..."
                className="px-4 py-2 rounded-l-full border text-[#E9E9E9]  font-semibold bg-secondary border-secondary focus:outline-none w-2/3"
              />
              <button className="bg-white font-bold text-secondary px-4 py-1 rounded-full mr-1 w-1/3">
                Search
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap md:flex-row items-center space-x-4">
            <span className="text-gray-600 flex items-center gap-1">
              Filter by{" "}
              <span className="text-orange-500 text-xl">
                <Filter />
              </span>
            </span>
            <Select
              isMulti
              options={categoryoptions}
              styles={customStyles}
              placeholder="Use"
              onChange={handleChange}
            />
            <Select
              isMulti
              options={useoptions}
              styles={customStyles}
              placeholder="Category"
              onChange={handleChange}
            />

            <Select
              isMulti
              options={orderoptions}
              styles={customStyles}
              placeholder="Order"
              onChange={handleChange}
            />

            <Select
              options={sortingoptions}
              styles={customStyle}
              placeholder="SortBy"
              onChange={handleChangesort}
            />
          </div>
        </div>
      </section>
      <section className="items-center justify-center w-full p-2">
        <h1 className="text-primary text-3xl pl-3">Products</h1>
       
          <div className="flex flex-wrap  gap-7 w-full p-2 justify-center items-center">
            {data && data.map((product) => (
              <div
                key={product.id}
                className="border border-primary group card relative rounded-xl w-[350px] h-[200px] "
              >
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
                  <Link
                    to={`/product-detail/${product.id}`}
                    className="transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <Eye className="text-primary text-xl" />
                  </Link>
                </motion.div>
              </div>
            ))}
           
                      </div>
                      
              
               <div className=" justify-center align-middle mx-auto items-center w-[30%]">
                           <Pagination page={3} count={20}/>
                              
            </div>
      </section>
    </>
  );
}
