import React from 'react';
import Card from 'react-bootstrap/Card';
import './Item.css';

class MbtiItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const mbtiText = {
            INTJ : '용의주도한 전략가',
            INTP : '논리적인 사색가',
            ENTJ : '대담한 통솔자',
            ENTP : '뜨거운 논쟁을 즐기는 변론가',
            INFJ : '선의의 옹호자',
            INFP : '열정적인 중재자',
            ENFJ : '정의로운 사회운동가',
            ENFP : '재기발랄한 활동가',
            ISTJ : '청렴결백한 논리주의자',
            ISFJ : '용감한 수호자',
            ESTJ : '엄격한 관리자',
            ESFJ : '사교적인 외교관',
            ISTP : '만능 재주꾼',
            ISFP : '호기심 많은 예술가',
            ESTP : '모험을 즐기는 사업가',
            ESFP : '자유로운 영혼의 연예인',
            NONE : '아직 투표되지 않음',
            DRAW : '투표 결과가 같은 MBTI가 두개 이상',
        }

        const mbtiName = this.props.name;
        return (
            <a className = "itemLink" href="#">
            <Card className = 'm-3' bg = 'light' variant = 'top'>
            <Card.Body>
                <Card.Img className = "mbti-card-image "src = "https://static.neris-assets.com/images/personality-types/avatars/infp-mediator.png"/>
                <Card.Title>{mbtiName}</Card.Title>
                <Card.Text>{mbtiText[mbtiName]}</Card.Text>
            </Card.Body>
            </Card>
            </a>
        )
    }
}

export default MbtiItem;