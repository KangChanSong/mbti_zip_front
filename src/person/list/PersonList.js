import React, { useEffect, useState } from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import ListFoot from '../../common/list/ListFoot';
import ListHead from '../../common/list/ListHead';
import { fetchItems  } from '../../modules/apiCaller';
import { renderAfterApiCall } from '../../modules/renderHelper';

const PersonList = () => {

    const[persons, setPersons] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    useEffect(() => {
        const url = '/person/api/v1/list?page=1&size=16&sort=createDate&dir=desc';
        fetchItems(url, 'person', setPersons, setError, setLoading);
    }, []);

    const element = renderAfterApiCall(persons, error, loading, 
        <div className = "personList">
            <ListHead type = 'person' />
            <ItemCardGroup type = 'person' itemList = {persons} />
            <ListFoot />
        </div>);

    return element;
}

export default PersonList;