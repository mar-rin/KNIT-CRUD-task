export const fetchDataStarted = () => ({
    type: 'FETCH_DATA_STARTED',
});

export const fetchDataSucceeded = (response) => ({
    type: 'FETCH_DATA_SUCCEEDED',
    payload: response.data
});

export const fetchDataFailed = (error) => ({
    type: 'FETCH_DATA_FAILED',
    payload: error
});

export const fetchDataFinished = () => ({
    type: 'FETCH_DATA_FINISHED',
});
