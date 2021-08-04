
window.onload = function () {
    let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0, btnClear, btnSell, btnOff, btnOn, price, salesScreen, literScreen;
    literScreen = document.getElementById('literScreen');
    price = document.getElementById("Price").value = ""
    salesScreen = document.getElementById('salesScreen').value = ""

    // TODO: getting all number buttons...

    this.btn1 = document.getElementById('btn1')
        .addEventListener('click', () => {
            this.literScreen.value += 1

        })

    this.btn2 = document.getElementById('btn2')
        .addEventListener('click', () => {
            this.literScreen.value += 2

        })
    this.btn3 = document.getElementById('btn3')
        .addEventListener('click', () => {
            this.literScreen.value += 3

        })
    this.btn4 = document.getElementById('btn4')
        .addEventListener('click', () => {
            this.literScreen.value += 4

        })
    this.btn5 = document.getElementById('btn5')
        .addEventListener('click', () => {
            this.literScreen.value += 5

        })
    this.btn6 = document.getElementById('btn6')
        .addEventListener('click', () => {
            this.literScreen.value += 6

        })
    this.btn7 = document.getElementById('btn7')
        .addEventListener('click', () => {
            this.literScreen.value += 7

        })
    this.btn8 = document.getElementById('btn8')
        .addEventListener('click', () => {
            this.literScreen.value += 8

        })
    this.btn9 = document.getElementById('btn9')
        .addEventListener('click', () => {
            this.literScreen.value += 9

        })
    this.btn0 = document.getElementById('btn0')
        .addEventListener('click', () => {
            this.literScreen.value += 0
        })

    // TODO: set all the buttons that will perfrom the sales actions
    this.btnSell = document.getElementById('btnSell')
        .addEventListener('click', () => {
            let price = 180
            liter = this.literScreen.value
            let totalcost = price * liter

            let count = 1
            let interVal = setInterval(salesMeter, 30);

            function salesMeter() {
                if (count >= totalcost){
                    clearInterval(interVal)
                    this.salesScreen.value = totalcost
                    
                    
                }
                else{
                    count++
                  this.salesScreen.value = count / liter + ".0" 
                }
            }

        })

    this.btnClear = document.getElementById('btnClear')
        .addEventListener('click', () => {
            this.literScreen.value = null
        })

    this.btnOff = document.getElementById('btnOff')
        .addEventListener('click', () => {
            rs = this.literScreen.value.slice(0, -1)
            this.literScreen.value = rs
        })





}

