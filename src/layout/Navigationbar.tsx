import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
export default function Navigationbar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>Station Monitoring Application</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as={NavLink} to='/weatherstations'> weather stations</Menu.Item>
                    <Menu.Item as={NavLink} to='/waterlevelstations'> water level stations</Menu.Item>
                    <Menu.Item> Login</Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    );
}