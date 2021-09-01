import React, { useEffect, useState } from 'react';
import GetHead from '../../common/get/GetHead';
import VoteChart from '../../vote/VoteChart';
import Comment from '../../comment/Comment';
import { fetchOne } from '../../modules/apiCaller';
import { renderAfterApiCall } from '../../modules/renderHelper';

const JobGet = ({ match }) => {

    const jobId = match.params.jobId;
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError ] = useState(null);

    useEffect(() => {
        const url = "/job/api/v1/get/" + jobId;
        fetchOne(url, setJob, setError , setLoading);
    }, []);

    const element = (
        <div className = "jobGet">
            <GetHead 
                item = {job}
                type = 'job'
            />
            <VoteChart />
            <Comment type = 'job' id = {jobId} /> 
        </div>
    )
    return renderAfterApiCall(job, error, loading, element);
}

export default React.memo(JobGet);