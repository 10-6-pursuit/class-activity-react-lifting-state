import { useState } from "react";

export default function Attendees({ event, updateEventAttendance, Attendee, attendees }) {
  
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return(
    <>
                      <button onClick={toggleEventAttendees}>
                        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
                      </button>
                      {showAttendees ? (
                        <div className="attendees">
                          {attendees.map((attendee, index) => (
                            <Attendee event={event} key={index} updateEventAttendance={updateEventAttendance} attendee={attendee}/>
                          ))}
                        </div>
                      ) : null }
    </>
  )
}
