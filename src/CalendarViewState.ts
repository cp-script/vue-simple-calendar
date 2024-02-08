import { INormalizedCalendarItem } from "./ICalendarItem"
import CalendarMath from "./CalendarMath"

class CalendarViewState {
	currentDragItem?: INormalizedCalendarItem = undefined
	dateSelectionOrigin?: Date = undefined
	currentHoveredItemId: string = ""
	currentHoveredHolidayId: string = ""
	CalendarMath: object = CalendarMath
}

export default CalendarViewState
