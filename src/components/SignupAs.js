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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NewLogin from "./NewLogin";
import CompanySignup from "./CompanySignup";

import PwdSignup from "./Pwdsignup";
const SignupAs = () => {
  return (
    <Tabs isFitted variant="soft-rounded">
      <TabList>
        <Tab>PWD fill up form</Tab>
        <Tab>Company fill up form</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <PwdSignup />
        </TabPanel>
        <TabPanel>
          <CompanySignup />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SignupAs;
