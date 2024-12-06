import { Button, Flex, TextInput, Title } from "@mantine/core";

export default function Login() {
  return (
      <>
          
           <Flex
      mih={50}
              gap="md"
             
      justify="center"
      align="center"
      direction="column"
              wrap="wrap"
              className="w-full h-[100vh] bg-gradient-to-t from-secondary to-primary"
          >
              <Title order={2} className="text-pretty">Login </Title>
              <TextInput
  label="Name"
  placeholder=" your name"
  className="min-w-72 max-w-80 font-bold"
  styles={{
    input: {
      backgroundColor: 'transparent', // Ensures transparent background
      border: '1px solid #ccc', // Optional: Adds a subtle border
    },
    label: {
        color: '#0F2051', 
        fontWeight:700
    
    },
  
  }}
/>
<TextInput
  label="Product name"
  placeholder="One of Your Product name"
  className="min-w-72 max-w-80 font-bold"
  styles={{
    input: {
      backgroundColor: 'transparent', // Ensures transparent background
      border: '1px solid #ccc', // Optional: Adds a subtle border
    },
    label: {
        color: '#0F2051', 
        fontWeight:700
    
    },
  
  }}
/>
 <Button component="a" href="/manage-product" variant="filled" color="#0F2051" className="w-full" radius="xl">Submit</Button>
      </Flex>
      </>
  )
}
