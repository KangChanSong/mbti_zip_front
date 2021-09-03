import React, { useEffect, useState } from 'react';
import { useFetchOne } from '../../hooks/CustomHooks';

const Image = ({ match }) => {
    
    const [ data , loading, error] = useFetchOne("/file/api/v1/" + match.params['filename']);

    if(error) return <h1>No Image</h1>
    return (
        <img src={`data:image/jpeg;base64,${data}`} />
    )
}

export default React.memo(Image);