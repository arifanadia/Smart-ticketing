const seatBtn = document.getElementsByClassName('seat-btn');
let count = 0;
let downCount = 40;
let ticket = 3;

for (const seat of seatBtn) {
    // console.log(seat);
    seat.addEventListener('click', function (e) {
        count = count + 1;
        seat.classList.add('bg-green-500');
        setInnerText('seat-count', count);


        // console.log(e.target);
        const seatTitle = e.target.innerText;
        // console.log(seat);

        price = 550;

        const selectedSeat = document.getElementById('selected-seat');

        const li = document.createElement('li');
        li.style.display = "flex"
        li.style.justifyContent = "space-between"

        const p = document.createElement('p');
        p.innerText = seatTitle;
        const p1 = document.createElement('p');
        p1.innerText = 'Economy';
        const p2 = document.createElement('p');
        p2.innerText = price;

        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);
        selectedSeat.appendChild(li);

        downCount = downCount - 1;
        setInnerText('seat-downCount', downCount);
       

        const cost = document.getElementById('total-cost').innerText;

        const convertedTotalCost = parseInt(cost);

        const totalPrice = parseInt(price);


        const totalCost = convertedTotalCost + totalPrice;
        
        setInnerText('total-cost', totalCost);
        const couponFif = totalCost * 15/100;
        // console.log(couponFif);

        const h5 = document.createElement('h5');
        h5.innerText = couponFif;

        // const grandTotal = document.getElementById("grand-total").innerText;
        // const convertedGrandTotal = parseInt(grandTotal);

        const bigGrandTotal = totalCost;
        setInnerText('grand-total', bigGrandTotal);



        // console.log(totalCost);




    })
}
const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function () {
    const couponElement = document.getElementById('coupon-code').value;
    console.log(couponElement);
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    const hideCoupon = document.getElementById('coupon-main');

    if (ticket <= 3) {
        if (couponCode === 'NEW15') {
            hideCoupon.classList.add('hidden')

        }
        else {
            alert("invalid coupon code")
        }

    }
    else {
        alert('please you buy at least 3 tickets')
    }
})



