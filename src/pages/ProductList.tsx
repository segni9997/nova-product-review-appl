import { Flex, TextInput, Button } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

// Define the Zod schema for validation
const schema = z.object({
    productName: z
      .string()
      .min(3, { message: "Product name must have at least 3 characters" })
      .nonempty({ message: "Product name is required" }),
    price: z
      .string()
      .transform((val) => Number(val))
      .refine((val) => !isNaN(val) && val > 0, {
        message: "Price must be a positive number",
      }),
    sellingPrice: z
      .string()
      .transform((val) => Number(val))
      .refine((val) => !isNaN(val) && val > 0, {
        message: "Selling price must be a positive number",
      }),
  });
const ProductForm = () => {
  const form = useForm({
    initialValues: {
      productName: "",
      price: "",
      sellingPrice: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log("Form Values:", values);
  };

  return (
    <Flex
      mih={50}
      bg="rgb(255, 255, 255)"
      gap="xl"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
      className="w-[70%]"
    >
      <form onSubmit={form.onSubmit(handleSubmit)} className="w-full flex flex-wrap gap-4">
        <TextInput
          label="Product Name"
          placeholder="Eg. Samsung Galaxy s24"
          {...form.getInputProps("productName")}
          className="min-w-72 max-w-80"
        />
        <TextInput
          label="Price"
          placeholder="$20"
          {...form.getInputProps("price")}
          type="number"
          className="min-w-72 max-w-80"
        />
        <TextInput
          label="Selling Price"
          placeholder="$20"
          {...form.getInputProps("sellingPrice")}
          type="number"
          className="min-w-72 max-w-80"
        />
        <Button type="submit" className="min-w-72 max-w-80">
          Submit
        </Button>
      </form>
    </Flex>
  );
};

export default ProductForm;
