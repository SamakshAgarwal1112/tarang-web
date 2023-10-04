"use client";
import { Divider, Flex, Text, List } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function EventGuidelines() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const guidelines = [
    {
      title: "Criteria",
      content: [
        "Only group performances are allowed and all members should be equally involved throughout the performance",
        "Minimum participants : 8 members",
      ],
    },
    {
      title: "Registration eligibility",
      content: [
        "Fill Registration google form (within deadline)",
        "Registration fees: 200/- (per head)",
        "All the participant members must have their registration card/institute card.",
      ],
    },
    {
      title: "Dance style and duration",
      content: [
        "All forms of dance are allowed.",
        "Duration: 7 to 9 minutes",
        "Penalized points for exceeding time limits.",
      ],
    },
    {
      title: "Coordinators",
      content: ["Rakshit Goel (8941842574)", "Priyank Bhaskar (6232997288)"],
    },
    {
      title: "Prize pool",
      content: ["40,000/-"],
    },
  ];
  return (
    <Flex
      px={isMobileView ? "2rem" : "4rem"}
      pb={isMobileView ? "3rem" : "5rem"}
      direction="column"
      mt={isMobileView ? "2rem" : "4.5rem"}
    >
      <Text c="#fff" size={isMobileView ? "1.5rem" : "2rem"} fw="500">
        Guidelines
      </Text>
      <Divider mt={isMobileView ? "1rem" : "2rem"} size="1.5px" />
      {guidelines.map((event, index) => {
        return (
          <div key={index}>
            <Text
              c="#fff"
              size={isMobileView ? "0.75rem" : "1.125rem"}
              fw="500"
              mt="xl"
            >
              {event.title}:
            </Text>
            <List
              withPadding
              c="#9EA5AD"
              size={isMobileView ? "0.75rem" : "1.125rem"}
              fw="500"
            >
              {event.content.map((item, index) => {
                return (
                  <List.Item key={index} my="xs" lh="1.3">
                    {item}
                  </List.Item>
                );
              })}
            </List>
          </div>
        );
      })}
    </Flex>
  );
}
