
import MeetupList from "../components/meetups/MeetupList";

const detailMeetup = [
  {
  id: 'm1',
  title: "Meetup in Orlando FL",
  image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fcollegecandy.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fshutterstock_783024103.jpg%3Ffit%3D2048%252C1365%26ssl%3D1&f=1&nofb=1",
  address: "Orlando",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }
]

function HomePage() {
  return(
      <MeetupList meetups={detailMeetup} />
  );
}

export default HomePage;