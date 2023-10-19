import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "@/app/components/EventPageSections/HeroSection";
import { getAllEvents } from "../utils/apis";
import EventMain from "../components/EventPageSections/EventMain";

export const metadata = {
  title: "Events | Tarang'23",
  description:
    "Dance, Music, Drama, Fashion, Art, Literature, Photography, Design, and many more. Tarang'23 has it all. Check out the events here. ",
  keywords:
    "Tarang, Tarang'23, IIITDMJ Cultural Fest, Events, Dance, Music, Drama, Fashion, Art, Literature, Photography, Design",
};

export default async function Events() {
  const eventDetails = await getAllEvents();
  const events = eventDetails.data.events;

  return (
    <>
      <MainAppShell>
        <HeroSection />
        <EventMain events={events} />
      </MainAppShell>
    </>
  );
}
