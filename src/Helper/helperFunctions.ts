export function getRandomColor(){
    const colors = ["red","blue","green"];
    return colors[Math.floor(getRandomFloat(0,colors.length))]
}

export function getRandomFloat(min : number, max : number) {
    return (Math.random() * (max - min) + min);
}