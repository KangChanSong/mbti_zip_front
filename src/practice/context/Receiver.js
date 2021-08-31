import React, { Component } from 'react';
import { VoteChartConsumer } from '../../context/MbtiCountContext';

const Receiver = () => {
    return (
        <VoteChartConsumer>
            
            {
                (sample) => (
                    <div>
                        현재 설정된 값: {sample.state.value}
                    </div>
                )
            }
        </VoteChartConsumer>
    );
};

export default Receiver;