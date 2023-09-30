"use client";
import { Text, Stack, Grid, Card, Flex, Box, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
export default function EventCards() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const eventCardData = [
    {
      name: "Event Name",
      description:
        "Quidam officiis similique sea ei, vel tollit indoctum efficiendi",
      img: "/assets/EventCard2.webp",
    },
    {
      name: "Event Name",
      description:
        "Quidam officiis similique sea ei, vel tollit indoctum efficiendi",
      img: "/assets/EventCard2.webp",
    },
    {
      name: "Event Name",
      description:
        "Quidam officiis similique sea ei, vel tollit indoctum efficiendi",
      img: "/assets/EventCard2.webp",
    },
    {
      name: "Event Name",
      description:
        "Quidam officiis similique sea ei, vel tollit indoctum efficiendi",
      img: "/assets/EventCard2.webp",
    },
    {
      name: "Event Name",
      description:
        "Quidam officiis similique sea ei, vel tollit indoctum efficiendi",
      img: "/assets/EventCard2.webp",
    },
  ];

  function CardComp({ Imgprop, makeMobile = false, name, description }) {
    return (
      <Card radius={0} w={isMobile ? "95%" : "21vw"} p={0}>
        <Flex
          p={0}
          direction={makeMobile ? "row" : "column"}
          h={makeMobile ? 140 : "39vh"}
        >
          <Box>
            <Image
              w={makeMobile ? 135 : "100%"}
              style={{ objectPosition: "0% 0%", transition: "0.3s" }}
              alt="eventImage"
              {...Imgprop}
            />
          </Box>
          <Stack
            p={"12px 32px 24px 32px"}
            gap={10}
            align="flex-start"
            w={"100%"}
          >
            <Text fw={500} size={isMobile ? "lg" : "1.4rem"}>
              {name}
            </Text>
            <Text
              c="#676E76"
              size={isMobile ? "sm" : "1.2rem"}
              style={{ wordBreak: "break-word" }}
            >
              {description}
            </Text>
          </Stack>
        </Flex>
      </Card>
    );
  }

  return (
    <Stack
      bg={"#0F0F0F"}
      align="flex-start"
      pl={isMobile ? "1.5rem" : "5rem"}
      py={isMobile ? "1rem" : "4rem"}
      pr={isMobile ? 0 : "9vw"}
    >
      <Grid gutter={isMobile ? 30 : 110}>
        {eventCardData.map((event, index) => {
          return (
            <Grid.Col span={isMobile ? 12 : 4} key={index}>
              <CardComp
                Imgprop={{ h: "13vw", src: event.img }}
                makeMobile={isMobile}
                name={event.name}
                description={event.description}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </Stack>
  );
}