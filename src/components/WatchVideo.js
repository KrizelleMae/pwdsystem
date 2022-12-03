import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  AspectRatio,
  useDisclosure,
} from "@chakra-ui/react";

import Sample from "../images/sample.mp4";

function WatchVideo(props) {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
  );
  const OverlayTwo = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <div>
      <Button
        rounded={"full"}
        size={"lg"}
        _hover={{ bg: "green.500" }}
        boxShadow="lg"
        px={6}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Watch Signing Up Tutorial!
      </Button>
      <Modal isCentered isOpen={isOpen} size="2xl" onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Watch Signing Up Tutorial!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio maxW="full" ratio={4 / 2}>
              <iframe title="Tutorial" allowFullScreen />
            </AspectRatio>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button colorScheme="teal" ml="20px">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default WatchVideo;
