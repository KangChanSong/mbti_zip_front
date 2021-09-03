
export const getColor = (mbti) => {
    
    const colors = {
        INTJ : '#A600FF',
        INTP : '#C800FF',
        ENTJ : '#FF00F4',
        ENTP : '#CD56C8',
        INFJ : '#85FF00',
        INFP : '#0BFF00',
        ENFJ : '#00FF90',
        ENFP : '#00FF7A',
        ISTJ : '#00FFD3',
        ISFJ : '#00E9FF',
        ESTJ : '#00B1FF',
        ESFJ : '#0085FF',
        ISTP : '#CF8D27',
        ISFP : '#C87548',
        ESTP : '#C85348',
        ESFP : '#EB1400',
    }

    return colors[mbti];
}