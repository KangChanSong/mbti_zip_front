import React from 'react';
import GetHead from '../../common/get/GetHead';
import VoteChart from '../../vote/VoteChart';
import Comment from '../../comment/Comment';

class PersonGet extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const samplePerson = {
            image : 'image',
            name : '송강찬',
            writer : 'skc97',
            mbti : 'INFP'
        }

        return (
            <div className = "personGet">
            <GetHead 
                item = {samplePerson}
                type = 'person'

            />
            <VoteChart />
            <Comment /> 
        </div>
        )
    }
}

export default PersonGet;