import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Location from './components/Location';
import config from './config';
import SelectedDay from './components/SelectedDay';
import Forecast from './components/Forecast';
import Loader from './components/Loader';
import { getWeatherAction, setSelectedDayAction } from './store/weather/actions';
import { getRequest } from './store/weather/selectors';

class App extends Component {
  componentDidMount() {
    this.props.getWeather();
  }

  setSelectedDay = day => this.props.setSelectedDay(day);

  render() {
    const { request } = this.props;
    const { isFetching, error } = request;
    if (isFetching) {
      return <Loader />;
    }
    if (error) {
      return <div>Error fetching data</div>;
    }
    return (
      <div className="App">
        <Location
          city={config.city}
          country={config.country}
        />
        <SelectedDay />
        <Forecast onDayChanged={this.setSelectedDay} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    request: getRequest(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getWeather: () => dispatch(getWeatherAction()),
    setSelectedDay: day => dispatch(setSelectedDayAction(day))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

