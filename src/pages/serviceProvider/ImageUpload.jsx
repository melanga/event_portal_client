import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import UploadIcon from '@mui/icons-material/Upload';

export const ImageUpload = ({ onSuccess }) => {
    // FILE UPLOAD---------------------------------------------------
    const [files, setFiles] = useState([]);

    const onInputChange = (e) => {
        console.log(e.target.files);
        setFiles(e.target.files);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        for (let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios
            .post('http://localhost:3000/api/v1/upload', data)
            .then((response) => {
                toast.success('Uploaded Successfully');
                onSuccess(response.data);
            })
            .catch((e) => {
                console.log(e);
                toast.error('Upload Failed');
            });
    };

    return (
        <div>
            <form method="post" action="#" id="#" onSubmit={onSubmit}>
                <div className="form-group files">
                    <label>Upload Your Images </label>
                    <input
                        type="file"
                        className="form-control"
                        multiple
                        onChange={onInputChange}
                    />
                </div>
                <button className="SPDisplayEditButton">
                    <UploadIcon />
                    Upload Photos
                </button>
            </form>
        </div>
    );
};
