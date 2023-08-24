const teaFlavour = {
    BlackTea: 100,
    Chamomile: 100,
    GreenTea: 100,
    Matcha: 100
};

const checkValue = property => {
    if ( property  === 100)
        console.log(true);
    else
        console.log(false);
}



//modul export dengan ES6
export  {teaFlavour, checkValue};
//console.log(teaFlavour);