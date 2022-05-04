import { MongoClient } from 'mongodb';
import MeetupList from "../components/meetups/MeetupList";
import Head from 'next/head';
import { Fragment } from 'react';

function HomePage(props) {

  return(
    <Fragment>
      <Head>
        <title>Friend Meetups</title>
        <meta name="description" content="Find and setup friendly meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// This code will only be for production users wont't see this
export async function getStaticProps() {
  // fetch data from API
  const client = await MongoClient.connect('mongodb+srv://fernando321:xXIRC2Q9ZKl40Ut6@cluster0.a4gkt.mongodb.net/freindsmeetup?retryWrites=true&w=majority');

  const db = client.db();
  const collection = db.collection('meetups');

  const meetups = await collection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          description: meetup.description
      }})
    },
    revalidate: 10
  };
}

export default HomePage;