import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function meetupDetails() {
    return (
        <MeetupDetail image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fcollegecandy.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fshutterstock_783024103.jpg%3Ffit%3D2048%252C1365%26ssl%3D1&f=1&nofb=1" title="First meetup" address="Orlando FL" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    );
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { meetupId: 'meetup-1' } },
        ],
        fallback: false
    };
}

// This code will only be for production users wont't see this
export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
      props: {
        meetupData: {
            id: meetupId,
            title: "Meetup in Orlando FL",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fcollegecandy.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fshutterstock_783024103.jpg%3Ffit%3D2048%252C1365%26ssl%3D1&f=1&nofb=1",
            address: "Orlando",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      }
    };
}

export default meetupDetails;