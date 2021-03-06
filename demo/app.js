/*global document:false */
import React from "react";
import ReactDOM from "react-dom";
import AreaDemo from "./components/victory-area-demo";
import AxisDemo from "./components/victory-axis-demo";
import BarDemo from "./components/victory-bar-demo";
import ChartDemo from "./components/victory-chart-demo";
import LineDemo from "./components/victory-line-demo";
import ScatterDemo from "./components/victory-scatter-demo";
import ErrorBarDemo from "./components/victory-errorbar-demo";
import CandlestickDemo from "./components/victory-candlestick-demo";
import EventsDemo from "./components/events-demo";
import GroupDemo from "./components/group-demo";
import VoronoiDemo from "./components/victory-voronoi-demo";
import TooltipDemo from "./components/victory-tooltip-demo";
import { Router, Route, Link, hashHistory } from "react-router";

const content = document.getElementById("content");

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },

  render() {
    return (
      <div>
        <h1>Victory Chart and Friends Demo</h1>
        <ul>
          <li><Link to="/chart">Victory Chart Demo</Link></li>
          <li><Link to="/axis">Victory Axis Demo</Link></li>
          <li><Link to="/area">Victory Area Demo</Link></li>
          <li><Link to="/bar">Victory Bar Demo</Link></li>
          <li><Link to="/line">Victory Line Demo</Link></li>
          <li><Link to="/scatter">Victory Scatter Demo</Link></li>
          <li><Link to="/errorbar">Victory Error Bar Demo</Link></li>
          <li><Link to="/candlestick">Victory Candlestick Demo</Link></li>
          <li><Link to="/events">Events Demo</Link></li>
          <li><Link to="/group">Group Demo</Link></li>
          <li><Link to="/voronoi">Victory Voronoi Demo</Link></li>
          <li><Link to="/tooltip">Victory Tooltip Demo</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="axis" component={AxisDemo}/>
      <Route path="area" component={AreaDemo}/>
      <Route path="bar" component={BarDemo}/>
      <Route path="chart" component={ChartDemo}/>
      <Route path="line" component={LineDemo}/>
      <Route path="scatter" component={ScatterDemo}/>
      <Route path="errorbar" component={ErrorBarDemo}/>
      <Route path="candlestick" component={CandlestickDemo}/>
      <Route path="events" component={EventsDemo}/>
      <Route path="group" component={GroupDemo}/>
      <Route path="voronoi" component={VoronoiDemo}/>
      <Route path="tooltip" component={TooltipDemo}/>
    </Route>
  </Router>
), content);
