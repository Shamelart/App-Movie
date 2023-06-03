import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginations({ totalPage, handleActualPage }) {


  return (
    <Stack spacing={2}>
      <Pagination sx={{ backgroundColor: "whitesmoke", marginTop: "40px" }} count={totalPage} shape="rounded" onChange={(_, page) => { handleActualPage(page) }} />
    </Stack>

  );
}