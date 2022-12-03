import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Box,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NewLogin from "../components/NewLogin";
import CompanySignup from "./CompanySignup";

import NewSignup from "./Pwdsignup";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

const LoginAs = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal", "gray.700");
  const fontcolor = useColorModeValue("gray.50", "white");
  return (
    <Button
      mt="55px"
      position="fixed"
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      _focus={{ boxShadow: "none" }}
      {...props}
    >
      {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
    </Button>
  );
};

export default LoginAs;
