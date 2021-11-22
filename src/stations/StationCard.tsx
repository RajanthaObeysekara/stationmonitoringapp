import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

interface Props {
    name: string
}
export default function StationCard({ name }: Props) {
    return (
        <Card as={Link} to={`/waterlevelstations/${name}`}>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    <p>2021-10-21</p>
                </Card.Meta>
                <Card.Description>
                    <p>last modification</p>
                    <p>Longitude,Latitude</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <p> <Icon style={{color:'blue'}} name='rain'/>Daily Rain</p>
                <p> <Icon style={{color:'red'}} name='thermometer'/>Temperature</p>
                <p> <Icon style={{color:'green'}} name='rss'/>RSSI</p>
                <p> <Icon style={{color:'green'}} name='battery full'/>Battery</p>
            </Card.Content>
        </Card>
    );
}