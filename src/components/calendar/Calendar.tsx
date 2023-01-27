import { useCallback, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from '@fullcalendar/interaction';
import { getAuth } from 'firebase/auth';
import styled from 'styled-components';
import { H3 } from 'components/common';

const Calendar = (): JSX.Element => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const handleEvents = useCallback(
    (events: EventApi[]) => setCurrentEvents(events),
    []
  );

  const auth = getAuth();
  const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
    let title = prompt('오늘의 소비 메모는 어떤걸까요?')?.trim();
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        user: auth.currentUser?.uid,
      });
    }
  }, []);

  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    if (window.confirm('오늘의 소비내용을 삭제 하시겠습니까?')) {
      clickInfo.event.remove();
    }
  }, []);

  return (
    <CalendarContainer>
      <CalendarH3>소비 캘린더</CalendarH3>
      <CalendarWrapper>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          editable={true}
          weekends={true}
          locale="ko"
          locales={allLocales}
          eventsSet={handleEvents}
          select={handleDateSelect}
          eventClick={handleEventClick}
        />
      </CalendarWrapper>
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  margin: auto;
  width: 70%;
  height: 100vh;
  border-radius: 10px;
  margin-top: 30px;
`;
const CalendarH3 = styled(H3)`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  color: ${(props) => props.theme.colors.black60};
`;
const CalendarWrapper = styled.div`
  .fc td {
    color: ${(props) => props.theme.colors.black60};
    font-size: ${(props) => props.theme.fontSize.content};
    border: 1px solid ${(props) => props.theme.colors.white0};
  }
  .fc-toolbar {
    color: ${(props) => props.theme.colors.black100};
  }
  .fc th {
    color: ${(props) => props.theme.colors.black60};
    height: 30px;
    font-size: ${(props) => props.theme.fontSize.h6};
    border: 1px solid ${(props) => props.theme.colors.white0};
  }
  .fc-button {
    background-color: ${(props) => props.theme.colors.brand0};
    border: 2px solid ${(props) => props.theme.colors.white30};
  }
  .fc-state-hover {
    border-color: #999999;
  }

  .fc-event {
    border-style: solid;
    font-size: ${(props) => props.theme.fontSize.content};
    cursor: default;
    height: 25px;
    padding-left: 2px;
    padding-top: 2px;
  }
  .fc {
    margin-bottom: 10px;
    height: 90vh;
    padding-top: 10px;
  }
`;
export default Calendar;
