import { useParams } from "react-router";
export default function StationDetails() {
    let params = useParams()
    return (
        <div>
            <h1>station {params.stationid} </h1>
        </div>
    )
}