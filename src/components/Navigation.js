import React, { useState } from "react";
import {
  Flex,
  Container,
  Link,
  Box,
  Text,
  HStack,
  VStack,
  Button,
  Heading,
  Avatar,
  Stack,
  Center,
  useColorModeValue,
  Select,
  Input,
  Wrap,
  WrapItem,
  AspectRatio,
  useColorMode,
  Divider,
} from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { BiHomeSmile } from "react-icons/bi";
import FontSizeChanger from "react-font-size-changer";

import "../css/navbar.css";
import Body_Jobpost from "../components/Body_Jobpost";
import WatchVideo from "../components/WatchVideo";
import Footer from "../components/Footer";

import GoogleLogin from "react-google-login";
import NewLogin from "../components/NewLogin";
import PopLogin from "../components/PopLogin";
import SendMessage from "../components/SendMessage";
import Contactform from "../components/Contactform";
import "../css/topnavigation.css";

export default function Navigation(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgcolor = useColorModeValue("teal", "gray.700");
  const fontcolor = useColorModeValue("gray.50", "white");

  const [data, setData] = useState([
    { title: "Sales Lady", company: "KCC Mall de Zamboanga" },
    { title: "Cashier", company: "SM Mindpro" },
  ]);
  return (
    <div id="target">
      <div id="target" class="nav">
        <input type="checkbox" id="nav-check"></input>
        <div class="nav-header">
          <div class="nav-title">
            <FontSizeChanger
              targets={["#target .content "]}
              onChange={(element, newValue, oldValue) => {
                console.log(element, newValue, oldValue);
              }}
              options={{
                stepSize: 2,
                range: 3,
              }}
              customButtons={{
                up: <Button>A+</Button>,
                down: <Button>A-</Button>,
                style: {
                  WebkitBoxSizing: "border-box",
                  WebkitBorderRadius: "0px",
                  width: "60px",
                  color: "gray",
                },
              }}
            />
            <Button
              ml={2}
              position="fixed"
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              _focus={{ boxShadow: "none" }}
              {...props}
            >
              {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div bg={bgcolor} id="target" class="nav-links">
          <Link href="" className="nav-items" color="white">
            <Text>
              <Text> Home</Text>
            </Text>
          </Link>
          <Link className="nav-items" color="white">
            About
          </Link>
          <Link className="nav-items" color="white">
            Jobs
          </Link>
          <Link href="ContactForm" className="nav-items" color="white">
            Contact
          </Link>
          <Link className="nav-items" color="white">
            <SendMessage />
          </Link>
          <Link className="nav-items" color="white">
            <PopLogin />
          </Link>
        </div>
      </div>
    </div>
  );
}
