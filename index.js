
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let totalPushUpEl = document.getElementById('total-push-up-el')
let messageEl = document.getElementById('message-el')
let pushUpBtnEl = document.getElementById('push-up-btn')
let trackingBtnEl = document.getElementById('tracking-btn')



console.log(totalPushUpEl)
let count = 0
let pushUpArray = []


function incrementPushUp() {
    count += 1
    countEl.textContent = count
    trackingBtnEl.disabled = false

}

function saveTracking() {
    pushUpArray.push(count)
    saveEl.textContent = 'Previous Entries: ' + pushUpArray.join(' - ')
    totalPushUp()
    count = 0
    countEl.textContent = 0
}

function totalPushUp() {
    let total = 0
    for(let i = 0; i < pushUpArray.length; i++) {
        total += pushUpArray[i]
        totalPushUpEl.textContent = `Total: ${total}`
    }

    if(total < 30) {
        messageEl.textContent = 'Try harder💪🏻, you are about to reach!'
    } else {
        messageEl.textContent = 'Congratulations🏆, You Have Finished Your Workout'
        pushUpBtnEl.disabled = true
        trackingBtnEl.disabled = true
    }

    
}

function reset() {
    saveEl.textContent = 'Previous Entries: '
    count = 0
    totalPushUpEl.textContent = 'Total: '
    countEl.textContent = 0
    pushUpArray = []
    pushUpBtnEl.disabled = false


}