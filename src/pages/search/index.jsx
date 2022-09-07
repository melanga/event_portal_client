import Searchbar from './Searchbar';
import Feed from './Feed';
// import Navbar from './Navbar';
import { Box, Stack } from '@mui/material';
import Footer from '../../components/Footer';

const SearchPage = () => {
    return (
        <Box>
            {/*<Navbar />*/}
            <Stack>
                <Searchbar />
            </Stack>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Feed />
            </Stack>
            <Footer />
        </Box>
    );
};

export default SearchPage;
