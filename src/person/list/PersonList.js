import React, { useEffect, useState } from 'react';
import ItemCardGroup from '../../common/item/ItemCardGroup';
import ListFoot from '../../common/list/ListFoot';
import ListHead from '../../common/list/ListHead';
import { fetchItems  } from '../../modules/apiCaller';
import { renderAfterApiCall } from '../../modules/renderHelper';
import { createListUrlWithQuery } from '../../modules/urlGenerator';

const PersonList = ({ location }) => {

    const[persons, setPersons] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    const currPage = location.search.page;
    const size = location.search.size;

    useEffect(() => {
        const url = createListUrlWithQuery(location.search, '/person/api/v1/list');
        fetchItems(url, 'person', setPersons, setError, setLoading);
    }, []);

    const element = renderAfterApiCall(persons, error, loading, 
        <div className = "personList">
            <ListHead type = 'person' />
            <ItemCardGroup type = 'person' itemList = {persons} />
            <ListFoot 
                curr ={currPage}
                size = {size}
            />
        </div>);

    return element;
}

export default PersonList;