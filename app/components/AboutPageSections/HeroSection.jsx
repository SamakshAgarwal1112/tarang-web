import { BackgroundImage, Text, Container } from "@mantine/core";
import cssStyles from "@/app/styles/about.module.css";

export default function HeroSection() {
  return (
    <Container
      h={"60vh"}
      m={0}
      p={0}
      miw="100%"
      pos={"relative"}
      className={cssStyles.HeroSectionContainer}
    >
      <BackgroundImage
        src={`https://res.cloudinary.com/prajjwalcdn/image/upload/v1696502907/about-header_wjneka.png`}
        miw={"100%"}
        h={"100%"}
        style={{
          hero: {
            objectFit: "cover",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          },
        }}
      >
        <Text
          fz={"8rem"}
          c="white"
          pos="absolute"
          fw={500}
          bottom={"2rem"}
          left={"5rem"}
          className={cssStyles.HeroSectionHeading}
        >
          About
        </Text>
      </BackgroundImage>
    </Container>
  );
}
