import { useEffect, useState } from 'react';
import { Typography, Box, Modal } from "@mui/material";
import { DataGrid, ptBR } from '@mui/x-data-grid';
import { fetchData, columns } from "../../services/api";
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function PanelData() {
    const [positions, setPositions] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedElement, setSelectedElement] = useState(null);
    const handleOpen = (params) => {
        setSelectedElement(params?.row);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetchData(setPositions);
    }, []);


    


function ShowContact() {
  
  if (selectedElement?.contactType === "Link") {
    return (
      <>
      <p>{selectedElement?.contactType}:</p>
      <a href={selectedElement?.contact} >{selectedElement?.contact.substring(0,35)}...</a>
    </>
    
    );
  }
  else if (selectedElement?.contactType === "Email") {
    return (
      <>
        <p>{selectedElement?.contactType}:</p>
        <p>{selectedElement?.contact}</p>
      </>);
  } else {
    return (<>
      <p>{selectedElement?.contactType}:</p>
      <p>{selectedElement?.contact}</p>
    </>);
  }
}


    return (
        <Box sx={{ height: 520, width: '100%' }}>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
    
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Vaga Renovável: {selectedElement?.position}
              </Typography>
    
    
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Empresa: {selectedElement?.companyName}
              </Typography>
              <MenuList>
                <ShowContact/> 
              </MenuList>
              
    
            </Box>
          </Modal>
          <DataGrid
            rows={positions}
            columns={columns}
            loading={positions.length === 0}
            rowHeight={80}
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
            onCellClick={handleOpen}
          />
        </Box>
      );
    }
    