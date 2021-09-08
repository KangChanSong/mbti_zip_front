import React from 'react';
import changeTypeToKorean from '../../common/TypeChanger';
import './List.css';
import SortSelect from '../select/SortSelect';


const ListHead = ({ type, sort, dir, keyword}) => {

    const handleChange = ({ sort , dir}) => {
        const url = "/" + type + "/list?page=1&size=16&sort=" + sort + "&dir=" + dir;
        window.location.href = url; 
    }
    return (
        <div className = "listHead">
                <h2>
                    {changeTypeToKorean(type)} 목록 
                        { keyword ? <span style = {{ fontSize : '18px'}}> | {keyword}</span> : <></> } 
                </h2>
            
                <SortSelect 
                        type = {type}
                        sort = {sort}
                        dir = {dir}
                        handleChange = {handleChange}
                        />
        </div>
    );
}

export default React.memo(ListHead);