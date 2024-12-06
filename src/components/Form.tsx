import {
  Button,
  Flex,
  Group,
  Rating,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import "@mantine/core/styles.css";

export const Form = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      comment: "",
      rating: "",

      termsOfService: false,
    },
   
  });

  return (
    <Flex
    mih={50} 
    gap="lg"
    justify="center"
    align="center"
    direction="column"
    wrap="nowrap"
    className="border rounded-xl  bg-secondary p-2 "
    style={{ maxHeight: 'fit-content' }} // Ensures content fits without overflow
      >
      <Title order={2} className=" text-primary">Review Product name</Title>
          
    <TextInput
              withAsterisk
             
      label="Name"
      placeholder="segni Asrat"
      key={form.key("name")}
      {...form.getInputProps("name")}
      className="rounded-full border-gray-200 w-[90%] font-bold text-white"
              radius={50}
    />,
    
    <Flex direction="column" justify="flex-start" className="w-[90%]">
      {/* <Title order={5} size="md" className="font-normal">Rate</Title> */}
      <Rating fractions={4} defaultValue={3.75} size="xl" />
    </Flex>
    <Textarea
      variant="filled"
      label="Comment"
      withAsterisk
      autosize
      description="write your comment here"
      placeholder="This product....."
      minRows={2}
      maxRows={4}
              cols={50}
              className="w-[90%] font-bold text-white"
    />
    <Group justify="flex-center" mt="md">
      <Button type="submit" color="rgb(237,147,12)" radius="xl">
        Review
      </Button>
    </Group>
  </Flex>
  );
};
