export default function Event({
  Attendee,
  Attendees,
  events,
  updateEventAttendance,
}) {
  return (
    <div className="events">
      <ul>
        {events.map((event) => {
          const { people: attendees } = event;
          return (
            <li key={event.id}>
              <img src={event.eventImage} alt={event.name} />
              <h5>
                {event.name} {event.eventType}
              </h5>
              <br />
              <span>Organized by: {event.organizer} </span>
              <br />
              <Attendees
                event={event}
                updateEventAttendance={updateEventAttendance}
                Attendee={Attendee}
                attendees={attendees}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
