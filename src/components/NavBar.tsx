// import { Button, Container, Group } from "@mantine/core";
// import { useState } from "react";
// // import { useDisclosure } from "@mantine/hooks";
// import { Link } from "react-router-dom";
import logo from "../assets/images/logonova.png";
// export function NavBar() {
//   const links = [
//     { link: "/", label: "Home" },
//     { link: "/products", label: "Product" },
//   ];
  // const [opened, { toggle }] = useDisclosure(false);
  // const [active, setActive] = useState(links[0].link);

  // const items = links.map((link) => (
  //   <Link

  //     to="/products"
  //     className={` px-3 py-2 rounded-md text-gray-400 dark:text-white text-sm font-medium ${
  //       active === link.link
  //         ? " text-white border-b-2 border-primary"
  //         : "hover:text-white dark:hover:bg-gray-700"
  //     }`}
  //     onClick={(event) => {
  //       event.preventDefault();
  //       setActive(link.link);
  //     }}
  //   >
  //     {link.label}
  //   </Link>
  // ));

//   return (
//     // <header className=" h-14 mb-30 bg-secondary rounded-full   dark:bg-primary border-b border-gray-300 dark:border-gray-700 w-[80%] p-2  mx-auto mt-10 top-10 z-50 sticky ">
//     //   <Container className="h-full flex flex-row justify-between items-center w-full rounded-full">
//     //     <img src={logo} alt="logo" width={50} height={50} />

//     //     <Group className="xs:flex flex-row gap-1">
//     //       {links.map((link) => (
//     //         <Link
//     //           key={link.label}
//     //           to={link.link}
//     //           className={`px-3 py-2 rounded-md text-gray-400 dark:text-white text-sm font-medium ${
//     //             active === link.link
//     //               ? "text-white border-b-2 border-primary"
//     //               : "hover:text-white dark:hover:bg-gray-700"
//     //           }`}
//     //           onClick={() => setActive(link.link)}
//     //         >
//     //           {link.label}
//     //         </Link>
//     //       ))}
//     //     </Group>

//     //     <div className="gap-2 flex flex-row">
//     //       <Button
//     //         className="p-1 px-2 rounded-full bg-primary text-white"
//     //         color="rgb(237,147,12)"
//     //         radius="xl"
//     //         component="a"
//     //         href="/login"
//     //       >
//     //         Post Product
//     //       </Button>
//     //       <Button className="p-1 px-2 rounded-full border-2 border-white text-white" variant="outline" color="rgb(255,255,255)" radius="xl" ></Button>
//     //     </div>
//     //   </Container>
//     // </header>


//   );
// }
import { Burger, Center, Container, Flex, Group, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import "../assets/css/style.css"
import { ChevronDown } from 'react-feather';
const links = [
  { link: '/', label: 'Home' },
  {
   
    label: 'Product',
    links: [
      { link: '/manage-product', label: 'Add' },
      { link: '/login', label: 'Edit' },
      { link: '/login', label: 'Delete' },
    ],
  },
 
];

export function NavBar() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className="link"
              // onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={`linkLabel`}>{link.label}</span>
                <ChevronDown size={14} />
              </Center>
            </a>
          </Menu.Target>
          {/* Dropdown with custom background color */}
          <Menu.Dropdown className="bg-blue-500 text-white rounded-lg shadow-lg">
          {link.links?.map((item) => (
    <Menu.Item
      key={item.link}
      component="a"
      href={item.link}
      className="hover:outline-secondary outline-1"
    >
      {item.label}
    </Menu.Item>
  ))}
          </Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className="link"
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className="header">
      <Container size="md">
        <Flex
          direction="row"
          align="center"
          justify="space-between" // Ensures proper spacing between left, center, and right content
          className="inner"
        >
          {/* Left Section - Logo */}
          <img src={logo} alt="Logo" width={44} height={44} className="logo" />

          {/* Center Section - Items */}
          <Group
            gap={5}
            className="items-center" // Optional class for additional styling
            visibleFrom="sm"
          >
            {items}
          </Group>

          {/* Right Section - Burger Menu */}
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            className="burger-menu"
          />
        </Flex>
      </Container>
    </header>
  );
}
