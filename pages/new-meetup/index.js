import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    function addMeetUp(meetup) {
        console.log(meetup);
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetUp} />
    );
}

export default NewMeetupPage;