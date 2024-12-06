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
import { useState } from "react";
import { DateTimePicker } from "@mantine/dates";
import { Delete, Edit, Plus } from "react-feather";
import { NavBar } from "../components/NavBar";
import { useForm, zodResolver } from "@mantine/form";
import { productSchema } from "../schemas/ProductSchema";
import { Product } from "../api/types/type";
import { createProduct } from "../api/Api";

export default function ManageProduct() {
  const [files, setFiles] = useState<File[]>([]);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

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
          {" "}
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
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Price"
              placeholder="$20"
              className="min-w-72 max-w-80"
              key={form.key("price")}
              {...form.getInputProps("price")}
            />
            <TextInput
              label="Selling Price"
              placeholder="$20"
              className="min-w-72 max-w-80"
              key={form.key("sellingPrice")}
              {...form.getInputProps("sellingPrice")}
            />{" "}
            <TextInput
              label="Discount"
              placeholder="7"
              className="min-w-72 max-w-80"
              key={form.key("discount")}
              {...form.getInputProps("discount")}
            />
            <TextInput
              label="Minimum Qty"
              placeholder="10"
              className="min-w-72 max-w-80"
              key={form.key("minimumQuantity")}
              {...form.getInputProps("minimumQuantity")}
            />
            <TextInput
              label="Quantity on Hand"
              placeholder="7"
              className="min-w-72 max-w-80"
              key={form.key("quantityOnHand")}
              {...form.getInputProps("quantityOnHand")}
            />
            <TextInput
              label="Reserved Quantity"
              placeholder="2"
              className="min-w-72 max-w-80"
              key={form.key("reservedQuantity")}
              {...form.getInputProps("reservedQuantity")}
            />
            <TextInput
              label="Added By"
              placeholder="2"
              className="min-w-72 max-w-80"
              key={form.key("addedBy")}
              {...form.getInputProps("addedBy")}
            />
            <DateTimePicker
              clearable
              defaultValue={new Date()}
              label="Expire At"
              placeholder="Pick date and time"
              minDate={tomorrow}
              className="min-w-72 max-w-80"
              key={form.key("expiresAt")}
              {...form.getInputProps("expiresAt", {
                value: form.values.expiresAt
                  ? new Date(form.values.expiresAt)
                  : null,
                onChange: (value: any) =>
                  form.setFieldValue(
                    "expiresAt",
                    value ? value.toISOString() : ""
                  ),
              })}
            />
            <Select
  checkIconPosition="left"
  data={["Electronics", "Cloth", "Jewelry", "Cosmetics"]}
  label="Category"
  placeholder="Select a value"
  className="min-w-72 max-w-80"
  key={form.key("category")} 
  {...form.getInputProps("category", {
    onChange: (value:any) => form.setFieldValue("category", value || ""), // Update form state
  })}
/>
<MultiSelect
  checkIconPosition="left"
  data={["Wireless", "New", "Old", "Discounted"]}
  label="Tags"
  placeholder="Select tags"
  className="min-w-72 max-w-80"
  key={form.key("tags")} // Ensure "tags" matches the form field name
  {...form.getInputProps("tags", {
    onChange: (value:any) => form.setFieldValue("tags", value || []), // Update form state
  })}
/>
<Select
  checkIconPosition="left"
  data={["for_rent", "for_sale", "for_use"]}
  label="Use"
  placeholder="Select a value"
  className="min-w-72 max-w-80"
  key={form.key('use')} 
  {...form.getInputProps('use', {
    onChange: (value:any) => form.setFieldValue("use", value || ""), // Update form state
  })}
/>
          
<Textarea
  label="Description"
  minRows={10}
  maxRows={17}
  cols={70}
  className="min-w-72 max-w-[350px]"
  key={form.key("description")}
  {...form.getInputProps("description", {
    onChange: (value:any) => form.setFieldValue("description", value || ""),
  })}
/>

<Group
      justify="center"
      mt={10}
      p={5}
      className="min-w-72 max-w-80 bg-primary text-primary"
    >
      {/* Input for multiple image URLs */}
      <TextInput
        label="Image URLs"
        placeholder="Enter image URLs separated by commas"
        className="min-w-72 max-w-80"
        value={form.values.imageUrls.join(", ")} // Display URLs as a comma-separated string
        onChange={(event) => {
          const urls = event.target.value.split(",").map((url) => url.trim()); // Split input into an array
          form.setFieldValue("imageUrls", urls || []); // Update the form state with an array of URLs
        }}
      />
  
      {/* Button for file upload */}
      <FileButton
        onChange={setFiles}
        accept="image/png,image/jpeg"
        multiple
      >
        {(props) => (
          <Button variant="filled" color="rgb(237,147,12)" {...props}>
            Upload Image
          </Button>
        )}
      </FileButton>
    </Group>


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
