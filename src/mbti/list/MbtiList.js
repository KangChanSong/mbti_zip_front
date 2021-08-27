import React, { useEffect, useState } from 'react';
import MbtiItem from '../../common/item/MbtiItem';
import CardGroup from 'react-bootstrap/CardGroup';
import axios from 'axios';
import './MbtiList.css';
import { fetchItems } from '../../modules/apiCaller';
import { renderAfterApiCall } from '../../modules/renderHelper';

const MbtiList = () => {

    const[mbtis, setMbtis] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    useEffect(() => {
        const url = "/mbti/api/v1/list";
        fetchItems(url, 'mbti', setMbtis, setError, setLoading);
    }, []);

    const MbtiElements = ({ mbtis }) => {
        return (
            <>
            {
                mbtis.map(mbti => (<MbtiItem key = {mbti.key} name = {mbti.name.toUpperCase()} />))
            }
            </>
        )
    }

    const element = (
        <div className = "mbtiList">
            <h1>Mbti 목록</h1>
            <CardGroup>
                <MbtiElements mbtis = {mbtis} />
            </CardGroup>
        </div>
    );

    const render = renderAfterApiCall(mbtis, error, loading, element);

    return render;
}

export default MbtiList;