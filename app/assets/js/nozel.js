

this.freezeSystem(true)

let
    btnClear,
    btnSell,
    price,
    salesScreen,
    literScreen,
    systemInitializationState;

literScreen = document.getElementById('literScreen');
price = document.getElementById("Price").value = ""
salesScreen = document.getElementById('salesScreen').value = ""



//TODO: setting systemInitializationState to false will turn off the sales system..
systemInitializationState = false;

// TODO: getting all number buttons...
function keyPressed(key) {
    this.literScreen.value += key
}


// TODO: set all the buttons that will perfrom the sales actions
this.btnSell = document.getElementById('btnSell')
    .addEventListener('click', () => {
        let price = 180
        liter = this.literScreen.value
        let totalcost = price * liter

        let count = 1
        let interVal = setInterval(salesMeter, 30);

        function salesMeter() {
            if (count >= totalcost) {
                clearInterval(interVal)
                this.salesScreen.value = totalcost
            }
            else {
                count++
                this.salesScreen.value = count / liter + ".0"
            }
        }

    })


this.btnClear = document.getElementById('btnClear')
    .addEventListener('click', () => {
        this.literScreen.value = null
    })

function turnOnOff() {
    if (!this.systemInitializationState) {
        this.systemInitializationState = true
        document.getElementById('offOn-btn').src = "assets/images/turn-on.jpg"
        this.systemInitMessage(false)
       }

    else {
        this.systemInitializationState = false;
        document.getElementById('offOn-btn').src = "assets/images/turn-off.jpg"
        this.systemInitMessage(true)
    }
}


function freezeSystem(setState) {
        document.querySelectorAll('.nozel-btns').forEach(buttons => {
            buttons.hidden = setState
        })
}

function systemInitMessage(setState){
   setTimeout( ()=>{
        this.freezeSystem(setState)
     }, 2000)
}