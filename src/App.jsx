import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { fetchData } from './services/api';

function App() {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    fetchData(setPositions);
  }, []);


  return (
    <div>
     <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
