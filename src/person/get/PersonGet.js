import React, { useEffect, useState } from 'react';
import GetHead from '../../common/get/GetHead';
import VoteChart from '../../vote/VoteChart';
import Comment from '../../comment/Comment';
import { fetchOne } from '../../modules/apiCaller';
import { renderAfterApiCall } from '../../modules/renderHelper';

const PersonGet = ({ match }) => {

    const { personId } = match.params;
    const[person, setPerson ] = useState(null);
    const[loading, setLoading ] = useState(false);
    const[error, setError ] = useState(null);

    useEffect(() => {
        const url = "/person/api/v1/get/" + personId;
        fetchOne(url, setPerson,setError,setLoading);
    }, []);

    const element = (
        <div className = "personGet">
            <GetHead 
                item = {person}
                type = 'person'
            />
            <VoteChart itemId = {personId} type = 'person' />
            <Comment type = 'person' id = {personId}/> 
        </div>
    )

    return renderAfterApiCall(person, error,loading, element);
}

export default PersonGet;