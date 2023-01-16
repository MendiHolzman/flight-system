export interface FlightDetails {
    id?: number;
    peopleNumberOnFlight?: number;
    departureDate?: Date;
    landingDate?: Date;
    flightRouteId?: number;
    totalFlightTimeInHours?: number;
    numberOfCurrentLeg?: number;
    planeId?: number;
}