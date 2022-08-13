export const axiosErrorFormatter = (error, thunkAPI) => {
    return thunkAPI.rejectWithValue(
        error.response.status === 404 || error.response.status === 0
            ? {
                  isError: true,
                  message: 'Server Error, Try again later',
              }
            : error.response.data
    );
};
