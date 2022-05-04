import { Fragment } from 'react';
import Head from 'next/head';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

function meetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetail 
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://fernando321:xXIRC2Q9ZKl40Ut6@cluster0.a4gkt.mongodb.net/freindsmeetup?retryWrites=true&w=majority');

    const db = client.db();
    const collection = db.collection('meetups');

    const meetups = await collection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } })),
    };
}

// This code will only be for production users wont't see this
export async function getStaticProps(context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    
    const client = await MongoClient.connect('mongodb+srv://fernando321:xXIRC2Q9ZKl40Ut6@cluster0.a4gkt.mongodb.net/freindsmeetup?retryWrites=true&w=majority');

    const db = client.db();
    const collection = db.collection('meetups');

    const selectedMeetup = await collection.findOne({ _id: ObjectId(meetupId) });

    client.close();

    return {
      props: {
        meetupData: {
            id: selectedMeetup._id.toString(),
            title: selectedMeetup.title,
            image: selectedMeetup.image,
            address: selectedMeetup.address,
            description: selectedMeetup.description
        }
      }
    };
}

export default meetupDetails;