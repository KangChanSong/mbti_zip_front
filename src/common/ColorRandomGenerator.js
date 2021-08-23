const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark'
]

function getRandomColor(){
    let rand = Math.round((Math.random() * 7));
    return colors[rand];
}
export default getRandomColor;