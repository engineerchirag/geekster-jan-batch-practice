import React from 'react';
// import ErrorExample from './project/1-useState/setup/1-error-example'
// import UseStateBasics from './project/1-useState/setup/2-useState-basics'
// import UseStateCounter from './project/1-useState/3-useState-Counter';

import Charts from './project/1-useState/setup/4-charts'
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, Sankey, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import {Row, Col, Table} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];

  const nodes = [{name: 'a'}, {name: 'b'}, {name: 'c'}];
const links = [
  {source: 0, target: 1, value: 10},
  {source: 0, target: 2, value: 20},
  {source: 1, target: 2, value: 20}
];
  return (
    <div>
    <Charts />

    <Row>
    <Col>
    <XYPlot height={300} width= {1000}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <LineSeries data={data} />
  </XYPlot>
      </Col>
      <Col>
      <Table >
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
      
</Col>

</Row>
<div><Sankey
nodes={nodes}
links={links}
width={1000}
height={200}
/></div>
      </div>
    );
    
  
}

export default App;
