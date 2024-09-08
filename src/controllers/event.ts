import {
  createNewEvent,
  deleteEventById,
  getAllEvents,
  updateEventById,
} from "../services/event";

async function getEvents(req, res) {
  const events = await getAllEvents();
  res.send(events);
}

async function createEvent(req, res) {
  const { title, description, date, startTime, endTime, location } = req.body;
  const newEvent = await createNewEvent({
    title,
    description,
    date,
    startTime,
    endTime,
    location,
  });
  res.send(newEvent);
}

async function updateEvent(req, res) {
  const { id } = req.params;
  const { title, description, date, startTime, endTime, location } = req.body;
  const event = await updateEventById(id, {
    title,
    description,
    date,
    startTime,
    endTime,
    location,
  });
  res.send(event);
}

async function deleteEvent(req, res) {
  const { id } = req.params;
  const event = await deleteEventById(id);
  res.send(event);
}

export { getEvents, createEvent, updateEvent, deleteEvent };
