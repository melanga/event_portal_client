import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../api/reducers/serviceProviderSlice';

const Categories = ({ setCategory }) => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.service_provider);

    // create a list of categories
    const categoryList = categories.map((category) => {
        return { title: category.name };
    });

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const defaultProps = {
        options: categoryList,
        getOptionLabel: (option) => option.title,
    };

    return (
        <Autocomplete
            onChange={(event, value) => setCategory(value.title)}
            {...defaultProps}
            {...defaultProps}
            id="categorySearch"
            clearOnEscape
            margin="dense"
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Event Category"
                    variant="standard"
                />
            )}
        />
    );
};
// const categories = [
//     { title: 'Seminars' },
//     { title: 'Internal Company' },
//     { title: 'Meeting/ Periodic' },
//     { title: 'Trade shows/ Expos' },
//     { title: 'Leadership Events' },
//     { title: 'Networking Events' },
//     { title: 'Ceremonies/ Gala' },
//     { title: 'Product Launches' },
//     { title: 'VIP Events' },
//     { title: 'Weddings' },
//     { title: 'Funerals' },
//     { title: 'Birthday Parties' },
//     { title: 'Business Gatherings' },
//     { title: 'Graduation Parties' },
//     { title: 'Other' },
// ];

export default Categories;
