import { React, useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { fetchData } from "../services/api";
import ListPositions from './ListPositions';



export default function PaginatedItems() {
    const [page, setPage] = useState(1);
    const [rowsPerPage] = useState(10);
    const [positions, setPositions] = useState([]);
    const [totalPages, setTotalPages] = useState(100);



    useEffect(() => {
        fetchData(setPositions);
    }, []);
    useEffect(() => {
        const total = Math.ceil(positions.length / rowsPerPage);
        setTotalPages(total);
    }, [positions, rowsPerPage]);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Stack spacing={2}>
            <ListPositions positions={positions.slice((page - 1) * rowsPerPage, page * rowsPerPage)} />
            <Pagination count={totalPages} page={page} onChange={handleChangePage} />
           
        </Stack>
    );
}

