import EventService from "@/services/event";

class EventController {
  static async getEvents(req, res) {
    try {
      const events = await EventService.getAllEvents();
      res.send(events);
    } catch (error) {
      res.status(500).send({ error: "Error fetching events." });
    }
  }

  static async createEvent(req, res) {
    try {
      const { title, description, date, startTime, endTime, location } =
        req.body;
      const newEvent = await EventService.createNewEvent({
        title,
        description,
        date,
        startTime,
        endTime,
        location,
      });
      res.send(newEvent);
    } catch (error) {
      res.status(500).send({ error: "Error creating event." });
    }
  }

  static async updateEvent(req, res) {
    try {
      const { id } = req.params;
      const { title, description, date, startTime, endTime, location } =
        req.body;
      const event = await EventService.updateEventById(id, {
        title,
        description,
        date,
        startTime,
        endTime,
        location,
      });
      res.send(event);
    } catch (error) {
      res.status(500).send({ error: "Error updating event." });
    }
  }

  static async deleteEvent(req, res) {
    try {
      const { id } = req.params;
      const event = await EventService.deleteEventById(id);
      res.send(event);
    } catch (error) {
      res.status(500).send({ error: "Error deleting event." });
    }
  }
}

export default EventController;
