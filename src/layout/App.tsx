import { Fragment } from 'react';
import { Outlet, Route, Routes } from 'react-router';
import { Container } from 'semantic-ui-react';
import StationDetails from '../stations/StationDetails';
import WaterlevelStationList from '../stations/WaterlevelStationList';
import WeatherStationsList from '../stations/WeatherStationsList';
import Navigationbar from './Navigationbar';

function App() {
  return (
    <Fragment>
      <Navigationbar></Navigationbar>
      <Container fluid style={{ padding: '4rem' }}>
        <Routes>
          <Route path="waterlevelstations" element={<WaterlevelStationList></WaterlevelStationList>}>
            <Route path=":stationid" element={<StationDetails></StationDetails>}></Route>
          </Route>
          <Route path="weatherstations" element={<WeatherStationsList></WeatherStationsList>}></Route>
          <Route path='*' element={<h1>nothing</h1>}></Route>
        </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
