import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Box, Flex, Stack } from "@chakra-ui/react";
import config from "../assets/data/config";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = config.MY_serviceId;
      const templateId = config.MY_templateId;
      const userId = config.MY_userId;
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      opacity="75%"
    >
      <Stack
        marginTop="4rem"
        boxShadow=" 0 0 10px #6d00b7"
        p="6"
        rounded="md"
        bg="white"
        spacing={4}
        backgroundColor="whiteAlpha.900"
        flexDir="column"
        mb="8rem"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "90%", md: "468px" }}>
          <div id="contact-form">
            <input
              className="contact-form"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="contact-form"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows="5"
              className="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={submit} className="bn30">
              Send Message
            </button>

            <span className={emailSent ? "visible" : null} id="sent-message">
              Thank you for your message, I will be in touch in no time!
            </span>
          </div>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Contact;
