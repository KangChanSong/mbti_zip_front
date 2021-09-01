import React from 'react';
import { ContextConsumer } from '../../context/ContextContainer';

const Receiver = () => {
    return (
        <ContextConsumer>
            
            {
                (sample) => (
                    <div>
                        현재 설정된 값: {sample.state.value}
                    </div>
                )
            }
        </ContextConsumer>
    );
};

export default Receiver;