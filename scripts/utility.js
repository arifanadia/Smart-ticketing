// ----make typeOf string t0 typeOf Number -----//
function getConvertedValue(id) {
     const price = document.getElementById(id).innerText;
     const convertPrice = parseInt(price);
     return convertPrice;

}

// *******coupon code and grandTotal *********//
function updatedGrandTotalCost(status) {
     if (status === undefined) {
          const totalCostId = getConvertedValue('total-cost');
          document.getElementById('grand-total').innerText = totalCostId;
     }
     else {
          const couponCode = document.getElementById('coupon-code').value;
          // const couponCode = couponElement.split(" ").join();
          const seatCount = getConvertedValue('seat-count');
          
          
          if (seatCount >= 4) {
               if (couponCode === 'NEW15' || couponCode === 'Couple 20') {
                    const totalCostId = getConvertedValue('total-cost');
                    const discounted = totalCostId * 15/100;
                    document.getElementById('grand-total').innerText = totalCostId - discounted ;
                    document.getElementById('discount').innerText = discounted ;
                    
                    hideCoupon.classList.add('hidden');
                    showDiscount.classList.remove('hidden');

               }
               if ( couponCode === 'Couple 20') {
                    const totalCostId = getConvertedValue('total-cost');
                    const discounted = totalCostId * 20/100;
                    document.getElementById('grand-total').innerText = totalCostId - discounted ;
                    document.getElementById('discount').innerText = discounted ;
                    
                    hideCoupon.classList.add('hidden');
                    showDiscount.classList.remove('hidden');

               }
               else {
                    alert("invalid coupon code")
               }
          }
          else {
               alert('please you buy at least 4 tickets')
          }
     }

}

// ***** Total cost ****** //
function updatedTotalCost(value) {
     const totalCostId = getConvertedValue('total-cost');
     const totalCost = totalCostId + parseInt(value);
     document.getElementById('total-cost').innerText = totalCost;



}
// ----------------------------show and hide varriable

const hideCoupon = document.getElementById('coupon-main');
const showDiscount = document.getElementById('discount-main');


