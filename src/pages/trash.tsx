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
export default function ManageProduct() {
  const [files, setFiles] = useState<File[]>([]);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
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
          <TextInput
            label="Product Name"
            placeholder="Eg. Samsung Galaxy s24"
            className="min-w-72 max-w-80"
          />
          <TextInput
            label="Price"
            placeholder="$20"
            className="min-w-72 max-w-80"
          />
          <TextInput
            label="Selling Price"
            placeholder="$20"
            className="min-w-72 max-w-80"
          />{" "}
          <TextInput
            label="Discount"
            placeholder="7"
            className="min-w-72 max-w-80"
          />
          <TextInput
            label="Minimum Qty"
            placeholder="10"
            className="min-w-72 max-w-80"
          />
          <TextInput
            label="Quantity on Hand"
            placeholder="7"
            className="min-w-72 max-w-80"
          />
          <TextInput
            label="Reserved Quantity"
            placeholder="2"
            className="min-w-72 max-w-80"
          />
          <TextInput
            label="Added By"
            placeholder="2"
            className="min-w-72 max-w-80"
          />
          <DateTimePicker
            clearable
            defaultValue={new Date()}
            label="Expire At"
            placeholder="Pick date and time"
            minDate={tomorrow}
            className="min-w-72 max-w-80"
          />
          <Select
            checkIconPosition="left"
            data={["Electronics ", "Cloth", "Jewlery", "Cosmotics"]}
            label="Category"
            placeholder="select value"
            className="min-w-72 max-w-80"
          />
          <MultiSelect
            checkIconPosition="left"
            data={["Wireless ", "new", "old", "discounted"]}
            label="Tags"
            placeholder="select value"
            className="min-w-72 max-w-80"
          />
          <Select
            checkIconPosition="left"
            data={["Rent", "Use", "Sale"]}
            label="Use"
            placeholder="select "
            className="min-w-72 max-w-80"
          />
          <Textarea
            label="Description"
            minRows={10}
            maxRows={17}
            cols={70}
            className="min-w-72 max-w-[350px]"
          />
          <Group
            justify="center"
            mt={10}
            grow
            p={5}
            className="min-w-72 max-w-80 bg-primary text-primary"
          >
            <FileButton
              onChange={setFiles}
              accept="image/png,image/jpeg"
              multiple
            >
              {(props) => (
                <Button variant="filled" color="rgb(237,147,12)" {...props}>
                  Upload image
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
          
              </Flex>
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
          </Flex>
    </>
  );
}
