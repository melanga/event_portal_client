export const ImgDisplay = ({ files }) => {
    if (!files.length) {
        return null;
    }

    return files.map((file) => (
        <img
            loading="lazy"
            decoding="async"
            style={{ maxWidth: '200px' }}
            src={`http://localhost:8000/${file.filename}`}
            alt={file.originalname}
            key={file.originalname}
        />
    ));
};
