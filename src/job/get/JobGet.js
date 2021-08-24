import React from 'react';
import GetHead from '../../common/get/GetHead';
import VoteChart from '../../vote/VoteChart';

class JobGet extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const sampleJob = {
            title : '개발자', writer : 'skc97', mbti: 'INFP'
        }

        return (
            <div className = "jobGet">
                <GetHead 
                    item = {sampleJob}
                    type = 'job'

                />
                <VoteChart />
                {/* <Comment />  */}
            </div>
        );
    }
}

export default JobGet;