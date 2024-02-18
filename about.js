const btnAll = document.querySelectorAll('#btn')
let count = 0;
let totalSeat = 8;
for(const btn of btnAll){
    btn.addEventListener('click',function(e){
        count++;
        totalSeat = totalSeat - 1;
        //! only select 4 seat
        if(totalSeat < 4){
            alert('Maximum 4 seats selected')
            return;
        }
        const seatName = e.target.innerText
        const selectPlace = document.getElementById('select-place-container');
        const div = document.createElement('div');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        div.style.display = 'flex';
        
        p.style.marginLeft   = '73px'
        p2.style.marginLeft   = '140px'
        p3.style.marginLeft   = '170px'
        p.innerText = seatName;
        p2.innerText = 'Economic';
        p3.innerText = '500';
        selectPlace.appendChild(div);
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);

        const num = p3.innerText;
        // console.log(num)
        const totalCost = document.getElementById('total-cost').innerText
        // console.log(totalCost);
        const convertTotalCost = parseInt(totalCost);
        document.getElementById('total-cost').innerText = convertTotalCost + parseInt(num);

        // const grandTotal = document.getElementById('grand-total').innerText;
        // const convertGrandTotal = parseInt(grandTotal);
        // document.getElementById('grand-total').innerText = convertGrandTotal + parseInt(num);
        // console.log(grandTotal);
        

        e.target.style.backgroundColor = '#1DD100';
        setInnerTextById('total-seat',totalSeat);
        setInnerTextById('seat-count',count);
    })
}
    const applyBtn = document.getElementById('apply-btn');
    applyBtn.addEventListener('click',function(){
        const couponApply = document.getElementById('coupon-input').value;
        if(couponApply === 'NEW15'){
            const totalCost = document.getElementById('total-cost').innerText
            const total = totalCost * 0.15
            // grandTotal.innerText = total;
            // console.log(total);
            const sum = totalCost - total;
            const grandTotal = document.getElementById('grand-total');
            grandTotal.innerText = sum;
        }else if(couponApply === 'Couple 20'){
            const totalCost = document.getElementById('total-cost').innerText
            const total = totalCost * 0.2;
            const sum = totalCost - total;
            const grandTotal = document.getElementById('grand-total');
            grandTotal.innerText = sum;
        }else{
            alert('Invalid Coupon');
        }
    })



// !set innerText : 
function setInnerTextById(elementId,value){
    document.getElementById(elementId).innerText = value;
}