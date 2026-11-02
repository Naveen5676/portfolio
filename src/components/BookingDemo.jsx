import { useState } from "react";
export default function BookingDemo() {
  const [selected, setSelected] = useState(null);
  const [reserved, setReserved] = useState(["A4"]);
  const [status, setStatus] = useState("Select a seat to begin.");
  function reserve() {
    if (!selected) {
      setStatus("Choose an available seat first.");
      return;
    }
    setReserved((previous) => [...previous, selected]);
    setStatus(
      `${selected} reserved → booking confirmed → notification queued. (Illustrative flow)`,
    );
    setSelected(null);
  }
  return (
    <>
      <div className="project-visual">
        <div className="demo-head mono">
          <span>TicketFlow / Booking lab</span>
          <span>Interactive ↙</span>
        </div>
        <div>
          <div className="demo-title">One seat. One reservation.</div>
          <span className="mono">Choose a seat to explore the flow</span>
          <div className="seats" aria-label="Demo seats">
            {["A1", "A2", "A3", "A4", "A5"].map((seat) => (
              <button
                key={seat}
                className="seat"
                disabled={reserved.includes(seat)}
                aria-pressed={selected === seat}
                aria-label={
                  reserved.includes(seat) ? `Seat ${seat} unavailable` : seat
                }
                onClick={() => {
                  setSelected(seat);
                  setStatus(`${seat} selected. Ready to reserve.`);
                }}
              >
                {seat}
              </button>
            ))}
          </div>
          <button className="book" onClick={reserve}>
            Reserve a seat ↗
          </button>
          <button
            className="reset"
            onClick={() => {
              setSelected(null);
              setReserved(["A4"]);
              setStatus("Select a seat to begin.");
            }}
          >
            Reset
          </button>
          <div className="demo-status" aria-live="polite">
            {status}
          </div>
        </div>
        <span className="mono">
          Concept demo · runs locally in your browser
        </span>
      </div>
    </>
  );
}
