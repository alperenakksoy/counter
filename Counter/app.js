const decreaseBtn = document.querySelectorAll('button')[0];
const resetBtn = document.querySelectorAll('button')[1];
const increaseBtn = document.querySelectorAll('button')[2];
let counter = document.getElementById('value').textContent;
let counterColor = document.getElementById('value').style.color;

const equalize = () => {
    document.getElementById('value').textContent = counter;
};

const equalizeColors=()=>{
    document.getElementById('value').style.color = counterColor;
};

const increaseCounter = () =>{
    counter++;
    equalize();
    setColors();
    
};

const decreaseCounter = () =>{
    counter--;
    equalize();
    setColors();
};

const resetCounter = () =>{
    counter = 0;
    equalize();
    setColors();

};

const setColors=()=>{
if(counter > 0){
    counterColor = 'green';
    equalizeColors();
}else if(counter<0){
    counterColor='red';
    equalizeColors();
}else{
    counterColor = 'black';
    equalizeColors();
}
};










decreaseBtn.addEventListener('click',decreaseCounter);
resetBtn.addEventListener('click',resetCounter);
increaseBtn.addEventListener('click',increaseCounter);
