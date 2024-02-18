const btnAll = document.querySelectorAll('#btn')
let count = 0;
for(const btn of btnAll){
    btn.addEventListener('click',function(e){
        count++;
        console.log(count)
        // const seatCount = e.target.parentNode.childNodes[1].innerText;
        // console.log(e.target.parentNode.childNodes[1].innerText)
        console.log(e.target.parentNode.childNodes[3].innerText)
        // console.log(seatCount);
        // const selectPlace = document.getElementById('select-place-container');
        // const ul = document.createElement('ul');
        // const p = document.createElement('p');
        // p.innerText = seatCount;
        // selectPlace.appendChild(ul);
        // ul.appendChild(p);
        


        setInnerTextById('seat-count',count);
        // setInnerTextById('select-place-container',seatCount);
    })
}

//!set innerText : 
function setInnerTextById(elementId,value){
    document.getElementById(elementId).innerText = value;
}