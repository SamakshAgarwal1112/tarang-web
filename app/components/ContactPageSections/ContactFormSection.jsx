"use client";

import {
  Flex,
  Stack,
  Image,
  Text,
  TextInput,
  Textarea,
  Button,
  Box,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { IconMail } from "@tabler/icons-react";

const ContactFormSection = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  const commonInputStyles = {
    input: {
      border: "2px solid #9EA5AD",
      marginTop: 6,
      background: "#24292E",
      color: "#E5E7EA",
    },
    label: {
      color: "#E5E7EA",
      fontSize: isMobileView ? "0.75rem" : "1.125rem",
    },
  };

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <Flex
      direction={isMobileView ? "column" : "row"}
      bg="#24292E"
      px={isMobileView ? "2rem" : "5rem"}
      py={isMobileView ? "2rem" : "3rem"}
      gap="3rem"
    >
      <Stack maw={isMobileView ? "100%" : "45%"}>
        <Image
          src="/map(2).svg"
          alt=""
          pos="relative"
          w="100%"
          style={{ cursor: "pointer" }}
        />
        <Stack gap={isMobileView ? "1.5rem" : "2rem"}>
          <Text c="#E5E7EA" fz={isMobileView ? "0.75rem" : "1.125rem"}>
            52GG+H4G, Airport Rd, PDPM IIITDM Jabalpur Campus, Khamaria,
            Jabalpur, Madhya Pradesh 482005
          </Text>
          <Stack gap={isMobileView ? "1rem" : "1.5rem"}>
            <Box>
              <Text
                c="#E5E7EA"
                fz={isMobileView ? "1rem" : "1.5rem"}
                lh={isMobileView ? "1.2rem" : "2rem"}
              >
                +1 (432) 568-98-01
              </Text>
              <Text
                c="#E5E7EA"
                fz={isMobileView ? "1rem" : "1.5rem"}
                lh={isMobileView ? "1.2rem" : "2rem"}
              >
                +1 (432) 568-98-01
              </Text>
            </Box>
            <Text c="#E5E7EA" fz={isMobileView ? "0.75rem" : "1.125rem"}>
              info@gmail.com
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Box
        w={isMobileView ? "100%" : 700}
        h="100%"
        py={isMobileView ? "2rem" : "4.5rem"}
        px={isMobileView ? "2rem" : "4rem"}
        style={{ border: "2px solid #9EA5AD" }}
      >
        <Text
          c="#E5E7EA"
          size={isMobileView ? "1.5rem" : "2rem"}
          fw={500}
          mb="1.5rem"
        >
          Contact Us form
        </Text>
        <form>
          <Stack gap="1.125rem">
            <TextInput
              type="text"
              label="Name"
              placeholder="Enter your name here"
              styles={commonInputStyles}
              radius={0}
              {...form.getInputProps("name")}
            />
            <TextInput
              type="email"
              label="Email"
              placeholder="abc@gmail.com"
              styles={commonInputStyles}
              radius={0}
              {...form.getInputProps("email")}
            />
            <Textarea
              type="textarea"
              label="Message"
              autosize
              minRows={isMobileView ? 4 : 6}
              maxRows={8}
              placeholder="Enter your message"
              styles={commonInputStyles}
              radius={0}
              {...form.getInputProps("message")}
            />
          </Stack>
          <Group pt="2rem" justify="center">
            <Button
              size={isMobileView ? "sm" : "lg"}
              color="#0047FF"
              leftSection={<IconMail />}
              h="auto"
              px={isMobileView ? "0.5rem" : "1.125rem"}
              py="0.75rem"
              radius={0}
            >
              Send Message
            </Button>
          </Group>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactFormSection;