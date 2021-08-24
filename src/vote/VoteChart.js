import React from 'react';
import { Bar } from 'react-chartjs-2';
import provideMbtis from '../common/MbtiArrayProvider';
import './Vote.css';

function createDataWithMbti(mbtiVotes){

    let labels = [];
    let data = [];
    mbtiVotes.forEach(vote => {
        labels.push(vote.mbti);
        data.push(vote.votes);
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
  
class VoteChart extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let mbtiVotes = [];
        let cnt = 0;
        provideMbtis().forEach(mbti => {
            mbtiVotes.push(
                {mbti : mbti['name'],
                votes: cnt++}
            )
        })
        const data = createDataWithMbti(mbtiVotes);

        return (
            <div className = "vote-chart">
                <h3>MBTI별 투표율</h3>
                <Bar
                    data={data}
                    height={100}
                    options={options} />
            </div>
        );
    }
}

  export default VoteChart;