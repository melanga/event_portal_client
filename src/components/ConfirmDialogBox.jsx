import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ConfirmDialogBox({ data, setConfirmDialog }) {
    const handleClose = () => {
        setConfirmDialog({ ...data, open: false });
    };

    return (
        <div>
            <Dialog
                open={data.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{data.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-item">
                        {data.subTitle}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button
                        onClick={() => {
                            data.onConfirm();
                            handleClose();
                        }}
                        autoFocus
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
