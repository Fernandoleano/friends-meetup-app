import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const router = useRouter();

    async function addMeetUp(enterMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enterMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

        router.push('/');
    }

    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta name="description" content="Make a new meetup and connect with friends" />
            </Head>
            <NewMeetupForm onSubmit={addMeetUp} />
        </Fragment>
    );
}

export default NewMeetupPage;