import React from "react";
import { Outlet } from "react-router";
import { CardGroup,} from "semantic-ui-react";
import stationsdata from '../stations.json'
import StationCard from "./StationCard";
export default function WaterlevelStationList() {
    const stations = stationsdata.waterlevel
    return (
        <div>
        <CardGroup>
            {stations.map((station, index) => (
                <StationCard key={index} name={station.name}></StationCard>
            ))}
        </CardGroup>
        <Outlet/>
        </div>
    )
}
