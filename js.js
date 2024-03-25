var counter = 0;

function removeOne() {
    const removeAmount = document.getElementById('removeAmount').value;
    let removeAmountValue = removeAmount ? parseInt(removeAmount) : 1;
    
    counter -= removeAmountValue;
    document.getElementById('counterStatus').innerHTML = counter;
}

function reset() {
    counter = 0;
    document.getElementById('counterStatus').innerHTML = counter;
}

function addOne() {
    const addAmount = document.getElementById('addAmount').value;
    let addAmountValue = addAmount ? parseInt(addAmount) : 1;
    
    counter += addAmountValue;
    document.getElementById('counterStatus').innerHTML = counter;
}
