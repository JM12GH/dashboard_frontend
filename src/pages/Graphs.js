import React from 'react';
import { Box } from '@mui/system';
import Barchart from '../components/Charts/Barchart';
import Piechart from '../components/Charts/PieChart';

const Graphs = () => {
  return (
    <>
    <Box height={100}/>
    <div style={{float:'left'}}>
      <Barchart/>
    </div>
    <div style={{float:'right'}}>
    <Piechart/>
    </div>
    </>
  )
}

export default Graphs