import React from 'react'

export const DataError = ({errorCode}) => {
    return(
        <p>Wystąpił błąd podczas ładowania danych. ({errorCode})</p>
    );
}