import {
    Button,
    FileButton,
    Flex,
    Group,
    MultiSelect,
    Select,
    Text,
    Textarea,
    TextInput,
    Title,
  } from "@mantine/core";
  import { useEffect, useState } from "react";
  import { DateTimePicker } from "@mantine/dates";
  import { Delete, Edit, Plus } from "react-feather";
  import { NavBar } from "../components/NavBar";
  import { useForm, zodResolver } from "@mantine/form";
  import { productSchema } from "../schemas/ProductSchema";
  import { Product } from "../api/types/type";
  import { createProduct, fetchProductById } from "../api/Api";
import { useParams } from "react-router-dom";
// import { useProductQuery } from "../hooks/useprodutsQuery";
  
  export default function EditProduct() {
    const [files, setFiles] = useState<File[]>([]);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const { id } = useParams();
    // const {  data:product, } = useProductQuery(id || "")
    const form = useForm<Product>({
      initialValues: {
        id: "",
        name: "",
        description: "",
        price: 0,
        category: "",
        tags: [],
        use: "",
        minimumQuantity: 1,
        sellingPrice: 0,
        addedBy: "",
        expiresAt: "",
        quantityOnHand: 0,
        reservedQuantity: 0,
        discount: "",
        createdAt: "",
        updatedAt: "",
        imageUrls: [],
      },
  
      validate: zodResolver(productSchema),
    });
      
    useEffect(() => {
        if (id) {
          const getProduct = async () => {
            try {
              const product = await fetchProductById(id);
              form.setValues({
                name: product.name,
                description: product.description,
                price: product.price,
                sellingPrice: product.sellingPrice,
                discount: product.discount,
                minimumQuantity: product.minimumQuantity,
                quantityOnHand: product.quantityOnHand,
                reservedQuantity: product.reservedQuantity,
                addedBy: product.addedBy,
                // expiresAt: product.expiresAt ? new Date(product.expiresAt) : null,
                category: product.category,
                tags: product.tags || [],
                use: product.use,
                imageUrls: product.imageUrls || [],
              });
            } catch (error) {
              console.error("Error fetching product:", error);
            }
          };
      
          getProduct();
        }
      }, [id, form]);
    const handleSubmit = async (values: typeof form.values) => {
      try {
        // Add createdAt and updatedAt timestamps
        const currentDate = new Date().toISOString();
        const product = {
          ...values,
          createdAt: currentDate,
          updatedAt: currentDate,
        };
    
        console.log("Submitting Product:", product);
    
        // Call your API to create the product
        const response = await createProduct(product);
    
        // Log the successful response
        console.log("Product created successfully:", response);
      } catch (error) {
        // Handle errors during submission
        console.error("Error creating product:", error);
      }
    };
    
    return (
      <>
        <NavBar />
        <Flex
          mih={50}
          mt={20}
          gap="md"
          justify="flex-start"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Title order={2} className="text-primary">
           
            Manage Product
          </Title>
          <Flex
            mih={50}
            bg="rgb(255, 255, 255)"
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
            className="w-[70%]  "
          >
            <form
              onSubmit={form.onSubmit(handleSubmit)}
              className="flex flex-wrap gap-3"
            >
             <TextInput
  label="Product Name"
  placeholder="Eg. Samsung Galaxy s24"
  className="min-w-72 max-w-80"
  key={form.key("name")}
  value={form.values.name}  // Ensure this binds the value from form state
  onChange={(event) => form.setFieldValue("name", event.target.value)}  // Handle the change manually
//   {...form.getInputProps("name")}
/>

<TextInput
  label="Price"
  placeholder="$20"
  className="min-w-72 max-w-80"
  key={form.key("price")}
  value={form.values.price}  // Ensure this binds the value from form state
  onChange={(event) => form.setFieldValue("price",parseFloat( event.target.value))}  // Handle the change manually
//   {...form.getInputProps("price")}
/>

<TextInput
  label="Selling Price"
  placeholder="$20"
  className="min-w-72 max-w-80"
  key={form.key("sellingPrice")}
  value={form.values.sellingPrice}  // Ensure this binds the value from form state
  onChange={(event) => form.setFieldValue("sellingPrice", parseFloat( event.target.value))}  // Handle the change manually
//   {...form.getInputProps("sellingPrice")}
/>

<TextInput
  label="Discount"
  placeholder="7"
  className="min-w-72 max-w-80"
  key={form.key("discount")}
  value={form.values.discount}  // Ensure this binds the value from form state
  onChange={(event) => form.setFieldValue("discount",  event.target.value)}  // Handle the change manually
//   {...form.getInputProps("discount")}
/>

<TextInput
  label="Minimum Qty"
  placeholder="10"
  className="min-w-72 max-w-80"
  key={form.key("minimumQuantity")}
  value={form.values.minimumQuantity}  // Ensure this binds the value from form state
  onChange={(event) => form.setFieldValue("minimumQuantity", parseFloat( event.target.value))}  // Handle the change manually
//   {...form.getInputProps("minimumQuantity")}
/>

<TextInput
  label="Quantity on Hand"
  placeholder="7"
  className="min-w-72 max-w-80"
  key={form.key("quantityOnHand")}
  value={form.values.quantityOnHand}  // Ensure this binds the value from form state
  onChange={(event) => form.setFieldValue("quantityOnHand", parseFloat( event.target.value))}  // Handle the change manually
//   {...form.getInputProps("quantityOnHand")}
/>

<TextInput
  label="Reserved Quantity"
  placeholder="2"
  className="min-w-72 max-w-80"
  key={form.key("reservedQuantity")}
  value={form.values.reservedQuantity}  // Ensure this binds the value from form state
  onChange={(event) => form.setFieldValue("reservedQuantity", parseFloat( event.target.value))}  // Handle the change manually
//   {...form.getInputProps("reservedQuantity")}
/>

<TextInput
  label="Added By"
  placeholder="2"
  className="min-w-72 max-w-80"
  key={form.key("addedBy")}
  value={form.values.addedBy}  // Ensure this binds the value from form state
  onChange={(event) => form.setFieldValue("addedBy",  event.target.value)}  // Handle the change manually
//   {...form.getInputProps("addedBy")}
/>

<DateTimePicker
  clearable
  defaultValue={new Date()}
  label="Expire At"
  placeholder="Pick date and time"
  minDate={tomorrow}
  className="min-w-72 max-w-80"
  key={form.key("expiresAt")}
//   value={form.values.expiresAt || null}  // Ensure this binds the value from form state
  onChange={(value: any) => form.setFieldValue("expiresAt", value ? value.toISOString() : "")}  // Handle the change manually
//   {...form.getInputProps("expiresAt")}
/>

<Select
  checkIconPosition="left"
  data={["Electronics", "Cloth", "Jewelry", "Cosmetics"]}
  label="Category"
  placeholder="Select a value"
  className="min-w-72 max-w-80"
  key={form.key("category")}
  value={form.values.category}  // Ensure this binds the value from form state
  onChange={(value: any) => form.setFieldValue("category", value)}  // Handle the change manually
//   {...form.getInputProps("category")}
/>

<MultiSelect
  checkIconPosition="left"
  data={["Wireless", "New", "Old", "Discounted"]}
  label="Tags"
  placeholder="Select tags"
  className="min-w-72 max-w-80"
  key={form.key("tags")}
  value={form.values.tags}  // Ensure this binds the value from form state
  onChange={(value: any) => form.setFieldValue("tags", value)}  // Handle the change manually
//   {...form.getInputProps("tags")}
/>

<Select
  checkIconPosition="left"
  data={["for_rent", "for_sale", "for_use"]}
  label="Use"
  placeholder="Select a value"
  className="min-w-72 max-w-80"
  key={form.key("use")}
  value={form.values.use}  // Ensure this binds the value from form state
  onChange={(value: any) => form.setFieldValue("use", value)}  // Handle the change manually
//   {...form.getInputProps("use")}
/>

<Textarea
  label="Description"
  minRows={10}
  maxRows={17}
  cols={70}
  className="min-w-72 max-w-[350px]"
  key={form.key("description")}
  value={form.values.description}  // Ensure this binds the value from form state
  onChange={(event) => form.setFieldValue("description", event.target.value)}  // Handle the change manually
//   {...form.getInputProps("description")}
/>

  
  
              <Group
                align="end"
                p={8}
                className={`min-w-72 max-w-96  ${
                  files.length == 0
                    ? "p-2 text-sm font-bold "
                    : "border border-secondary"
                }`}
              >
                {files.length == 0 ? (
                  <Text size="sm" className="w-full">
                    Selected File appear Here use .png and .jpg
                  </Text>
                ) : (
                  ""
                )}
                {files.length > 0 && (
                  <Text size="sm" mt="sm">
                    selected files:
                  </Text>
                )}
  
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </Group>
              <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="nowrap"
                className="min-w-80 "
              >
                <Button
                  variant="outline"
                  color="rgb(15,31,81)"
                  className="min-w-24 max-w-36 h-auto"
                  type="submit"
                >
                  <Plus />
                </Button>{" "}
                <Button
                  variant="outline"
                  color="rgb(237,147,12)"
                  className="min-w-24 max-w-36h-auto"
                >
                  <Edit />
                </Button>{" "}
                <Button
                  variant="outline"
                  color="rgb(188,4,7)"
                  className="min-w-24 max-w-36 h-auto gap-2"
                >
                  <Delete />
                </Button>
              </Flex>
            </form>
          </Flex>
        </Flex>
      </>
    );
  }
  