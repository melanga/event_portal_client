import Grid from '@mui/material/Grid';
import { Button, Container, Modal, Stack } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import Categories from './Categories';
import LocalLocations from './LocalLocations';
import * as React from 'react';

export default function Filter(props: {
    onClick: () => void,
    open: boolean,
    onClose: () => void,
    onClick1: () => void,
    onSubmit: (e) => void,
    category: (value: ((prevState: string) => string) | string) => void,
    location: (value: ((prevState: string) => string) | string) => void,
}) {
    return (
        <Grid item xs={12} md={2}>
            <Button
                onClick={props.onClick}
                startIcon={<TuneIcon color="inherit" />}
                sx={{
                    textTransform: 'none',
                    color: '#00ADB5',
                }}
            >
                <h3 className="filterButtonTitle">Filters</h3>
            </Button>
            <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Container maxWidth="sm">
                    <Box sx={{ bgcolor: '#fff' }} p={5} justifyContent="center">
                        <Stack direction="row" justifyContent="space-between">
                            <h3 className="filtersTitle">Filters</h3>
                            <IconButton
                                aria-label="close"
                                onClick={props.onClick1}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                        <Divider variant="middle" />
                        <form
                            noValidate
                            autoComplete="off"
                            onSubmit={props.onSubmit}
                        >
                            <Categories setCategory={props.category} />
                            <LocalLocations setLocation={props.location} />
                            <Grid
                                p={3}
                                container
                                spacing={3}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={12} md={6}>
                                    <Button
                                        className="filterButton"
                                        fullWidth={true}
                                        variant="outliined"
                                        type="submit"
                                        sx={{
                                            borderRadius: '50px',
                                            textTransform: 'none',
                                            justifyContent: 'center',
                                            color: '#00ADB5',
                                            border: '2px solid #00ADB5',
                                        }}
                                        textDecoration="none"
                                    >
                                        <p className="filterButtonContent">
                                            Clear Filters
                                        </p>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Button
                                        className="filterButton"
                                        fullWidth={true}
                                        variant="outlined"
                                        type="submit"
                                        sx={{
                                            borderRadius: '50px',
                                            textTransform: 'none',
                                            justifyContent: 'center',
                                            color: '#00ADB5',
                                            border: '2px solid #00ADB5',
                                        }}
                                        textDecoration="none"
                                    >
                                        <p className="filterButtonContent">
                                            Apply Filters
                                        </p>
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Container>
            </Modal>
        </Grid>
    );
}
