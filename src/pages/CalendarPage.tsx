import React, { useState } from 'react'
import '@fullcalendar/core/vdom'
import '@fullcalendar/react/dist/vdom'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'

import { tokens } from '../theme'
import {
  useTheme,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'

import Header from '../components/Header'
import EventModal from '../components/EventModal'

interface CalendarEventDetails {
  id: string
  title: string
  start: string
}

export default function CalendarPage() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState<CalendarEventDetails[]>([])
  // const [toggleModal, setToggleModal] = useState(false)

  // TODO: replace prompt with a modal component
  function handleDateClick(selected: {
    view: { calendar: any }
    dateStr: any
    startStr: any
    endStr: any
    allDay: any
  }) {
    // setToggleModal(true)
    const title = prompt('Please enter a title for your event')
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      })
    }
  }

  function handleEventClick(selected: {
    event: { title: any; remove: () => void }
  }) {
    if (
      window.confirm(
        `Are you sure you want to delete '${selected.event.title}'`
      )
    ) {
      selected.event.remove()
    }
  }

  return (
    <div className="m-6 h-full flex flex-col">
      <Header
        title="Calendar"
        subtitle="Full Interactive Calendar"
      />
      {/* {toggleModal && <EventModal />} */}
      <div className="flex justify-between mt-6 md:flex-row sm:flex-col gap-6">
        {/* EVENT LIST */}
        <div
          className="p-3 rounded"
          style={{
            flex: '1 1 20%',
            backgroundColor: `${colors.primary[400]}`,
          }}
        >
          <h5>Events</h5>
          <List>
            {currentEvents.map((event) => {
              return (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: `${colors.greenAccent[500]}`,
                    margin: '20px 0',
                    borderRadius: '2px',
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              )
            })}
          </List>
        </div>
        {/* CALENDAR */}
        <Box
          sx={{ flex: '1 1 100%', '& .fc-daygrid-day': { cursor: 'pointer' } }}
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: 'prev,next,today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: '1234', title: 'All day event', date: '2022-12-21' },
            ]}
          />
        </Box>
      </div>
    </div>
  )
}
