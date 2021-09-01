import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { renderAfterApiCall } from '../modules/renderHelper';
import { fetchVotes } from '../modules/apiCaller';
import './Vote.css';
import { ContextConsumer } from '../context/ContextContainer';

function createDataWithMbti(mbtiVotes){
    if(!mbtiVotes){
      return;
    }

    let labels = [];
    let data = [];
    mbtiVotes.forEach(vote => {
        labels.push(vote.mbti);
        data.push(vote.count);
    })   

    return {
        labels: labels,
        datasets: [
          {
            label: '# of Votes',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
}
  
const options = {
scales: {
    yAxes: [
    {
        ticks: {
        beginAtZero: true,
        },
    },
    ],
},
};
  
const VoteChartElement = ({type , itemId, value, setValue}) => {

    const [mbtiVotes, setMbtiVotes] = useState(null);
    const [total ,setTotal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
       fetchVotes(type, itemId, setValue , setError ,setLoading)
       if(value){
        setMbtiVotes(value.mbtiVotes);
        setTotal(value.total);
       }
    }, []);

    const data = createDataWithMbti(mbtiVotes);
    
    const element = (
      <div className = "vote-chart">
          <h3>MBTI별 투표율</h3>
          <p>총 득표수 : {total}</p>
          <Bar
              data={data}
              height={100}
              options={options} />
      </div>
    );
    
    return renderAfterApiCall(mbtiVotes, error, loading, element);
}

const VoteChart = ({type , itemId}) => (

    <ContextConsumer>
        {
          ({ state, actions}) => (
            <VoteChartElement
              type = {type}
              itemId = {itemId}
              value = {state.value}
              setValue = {actions.setValue}
            />
          )
        }
    </ContextConsumer>
)
  export default React.memo(VoteChart);