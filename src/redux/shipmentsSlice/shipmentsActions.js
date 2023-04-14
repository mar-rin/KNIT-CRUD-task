export const shipmentDeleted = (item) => ({
    type: 'SHIPMENT_DELETED',
    payload: item.trackingNo
});

export const shipmentEdited = (item) => ({
    type: 'SHIPMENT_EDITED',
    payload: {
        orderNo: item.orderNo,
        date: item.date,
        customer: item.customer,
        trackingNo: item.trackingNo,
        status: item.status,
        consignee: item.consignee}
});

export const customerSortedAscending = () => ({
    type: 'CUSTOMER_SORTED_ASCENDING',
});

export const customerSortedDescending = () => ({
    type: 'CUSTOMER_SORTED_DESCENDING',
});

export const dateSortedAscending = () => ({
    type: 'DATE_SORTED_ASCENDING',
});

export const dateSortedDescending = () => ({
    type: 'DATE_SORTED_DESCENDING',
});


