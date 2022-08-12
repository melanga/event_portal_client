export const axiosErrorFormatter = (error) => {
    return error.response.status === 404
        ? {
              isError: true,
              message: 'Server Error, Try again later',
          }
        : error.response.data;
};
