const seatBtn = document.getElementsByClassName('seat-btn');
for (const seat of seatBtn) {

    seat.addEventListener('click', function (e) {



        // seat limits
        const firstSeatCount = getConvertedValue('seat-count');
        if (firstSeatCount + 1 > 4) {
            alert('limit are finished');
            return;
        }

        // update seats
        const seatCount = getConvertedValue('seat-count');
        const seats = seatCount + 1
        document.getElementById('seat-count').innerText = seats;



        // update seat downCount 
        const seatDownCount = getConvertedValue('seat-downCount');
        const seatDown = seatDownCount - 1;
        document.getElementById('seat-downCount').innerText = seatDown;


        // same ticket can buy once and background color
        e.target.setAttribute('disabled', false)
        e.target.style.backgroundColor = '#1DD100';


        // append child's for add cart seats-ticket

        const seatTitle = e.target.innerText;
        const price = 550;

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

        const selected = selectedSeat.appendChild(li);

        // calling function of total and grand-total cost
        updatedTotalCost(price);
        updatedGrandTotalCost()



    })
}


// form


const inputs = document.getElementsByClassName('input');
const nam = document.getElementById('name');
const number = document.getElementById('number');
const submitButton = document.getElementById('submit');

for (const input of inputs) {
    input.addEventListener('keyup', function () {
        const seatCount = getConvertedValue('seat-count');
        const submit = submitButton.disabled = false;


        
            if (nam.value === "" || number.value === "") {
                submitButton.disabled = true;

            }


            if (nam.value.length < 5 || number.value.length < 11) {
                submitButton.disabled = true;

            }

            else {
                if(submit === true) {
                    document.getElementById('modal').style.display = 'block';
                    
                  
                
                }

            }
    })

}









