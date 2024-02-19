const btnAll = document.querySelectorAll('#btn');
let count = 0;
let totalSeat = 40;
let array = [];
for(const btn of btnAll){
    btn.addEventListener('click',function(e){
        count++;
        totalSeat = totalSeat - 1;
        //! only select 4 seat
        if(count > 4){
            alert('Maximum 4 seats selected');
            return;
        }
        e.target.style.color= 'white';
        e.target.style.backgroundColor = '#1DD100';
        const seatName = e.target.innerText;
        e.target.disabled = true;
        
        const selectSeat = document.getElementById('select-seat');
        
        const ul = document.createElement('ul');
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p.innerText = seatName;
        p2.innerText = 'Economic';
        p3.innerText = '550';
        selectSeat.appendChild(ul);
        ul.appendChild(p);
        ul.appendChild(p2);
        ul.appendChild(p3);
        
        const num = p3.innerText;
        const totalCost = document.getElementById('total-cost').innerText
        const convertTotalCost = parseInt(totalCost);
        document.getElementById('total-cost').innerText = convertTotalCost + parseInt(num);

        const grandTotal = document.getElementById('grand-total').innerText;
        const convertGrandTotal = parseInt(grandTotal);
        document.getElementById('grand-total').innerText = convertGrandTotal + parseInt(num);

        

        finalBtn.removeAttribute('disabled','');
        setInnerTextById('total-seat',totalSeat);
        setInnerTextById('seat-count',count);
    })
}
    const applyBtn = document.getElementById('apply-btn');
    applyBtn.addEventListener('click',function(){
        const couponApply = document.getElementById('coupon-input').value;
        if(couponApply === 'NEW15'){
            const totalCost = document.getElementById('total-cost').innerText;
            const total = totalCost * 0.15;
            const discount = document.getElementById('discount');
            discount.innerText = 'discount';
            setInnerTextById('discount-price',total);
            const sum = totalCost - total;
            setInnerTextById('grand-total',sum);
        }else if(couponApply === 'Couple 20'){
            const totalCost = document.getElementById('total-cost').innerText
            const total = totalCost * 0.2;
            const discount = document.getElementById('discount');
            discount.innerText = 'discount';
            setInnerTextById('discount-price',total);
            const sum = totalCost - total;
            setInnerTextById('grand-total',sum);
        }else{
            alert('Invalid Coupon');
        }
        addHidden('coupon-apply');
    })

    const finalBtn = document.getElementById('final-btn');
    finalBtn.setAttribute('disabled','');
    finalBtn.addEventListener('click',function(){
        const phoneNum = document.getElementById('phone-input');
        array.push(count);
        if(array > 0 && phoneNum.value){
            removeHidden('success-screen');
        }else{
            alert('Invalid please check again');
            location.reload();
        }
    })

    function addHidden(elementId){
        const element = document.getElementById(elementId);
        element.classList.add('hidden');
    };
    function removeHidden(elementId){
        const element = document.getElementById(elementId);
        element.classList.remove('hidden');
    }
    
    function setInnerTextById(elementId,value){
        document.getElementById(elementId).innerText = value;
    }
