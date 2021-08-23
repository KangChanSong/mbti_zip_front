const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info'
]

function getRandomColor(){
    let rand = Math.round((Math.random() * 6));
    return colors[rand];
}
export default getRandomColor;