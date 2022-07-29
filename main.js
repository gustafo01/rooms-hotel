"use strict"

const text = document.getElementById('text');
const btn = document.getElementById('btn');
const king = document.getElementById('king');
const twin = document.getElementById('twin');
const other = document.getElementById('other');
const rest = document.getElementById('rest');

btn.addEventListener('click', function(){
    convertToArray(text.value);
    king.textContent = `King: ${kingRooms}`;
    twin.textContent = `Twin: ${twinRooms}`;
    other.textContent = `Other: ${otherRooms}`;
    rest.textContent = `Rest: ${restRooms}`;
})
// Преобразую строку в массив
function convertToArray(str) {
    str = str.replace(/\r?\n/g, "");
    let arr = str.split('  ');
    divideRooms(arr);
}
// Создаю массив с разделенными комнатами
function divideRooms(arr) {
    let roomsArray = [];
    let temporaryArr = [];
    for(let i = 0; i < arr.length; i = i + 5) {
        temporaryArr = arr.slice(i, i + 5);
        roomsArray.push(temporaryArr);
    }
    console.log(roomsArray)
    sortingRoom(roomsArray);
}

let kingRooms;
let twinRooms;
let otherRooms;
let restRooms;

// Нахожу комнаты с пометкой King
function sortingRoom(roomsArr) {
    let kingResult = [];
    let twinResult = [];
    let otheResult = [];
    let restResult = [];
    for(let i = 0; i < roomsArr.length; i++) {
        if(roomsArr[i][1][roomsArr[i][1].length - 1] === 'K' || roomsArr[i][2] <= 1  && roomsArr[i][3] < 1) {
            kingResult.push(roomsArr[i][0]);
        } else if(roomsArr[i][2] == 1 && roomsArr[i][3] == 1) {
            twinResult.push(roomsArr[i][0]);
        } else if(roomsArr[i][1][roomsArr[i][1].length - 1] === 'T' && roomsArr[i][3] > 0) {
            twinResult.push(roomsArr[i][0] + `(${roomsArr[i][3]}+xEB)`);
        } else if(roomsArr[i][1][roomsArr[i][1].length - 1] === 'T') {
            twinResult.push(roomsArr[i][0]);
        } else if(roomsArr[i][2] == 1 && roomsArr[i][3] > 1) {
            twinResult.push(roomsArr[i][0] + `(${roomsArr[i][3] - 1}+xEB)`);
        } else if(roomsArr[i][3] > 0) {
            otheResult.push(roomsArr[i][0] + `(${roomsArr[i][3]}+xEB)`);
        } else {
            restResult.push(roomsArr[i][0]);
        }
        kingRooms = kingResult;
        twinRooms = twinResult;
        otherRooms = otheResult;
        restRooms = restResult;
        // findBabyBad(roomsArr)
    }
}

// function findBabyBad()


// function findOtherRooms(roomsArr) {
//     let result = [];
//     for(let i = 0; i < roomsArr.length; i++) {

//     }
// }


// // Нахожу комнаты с пометкой King
// function findKing(roomsArr) {
//     let result = [];
//     for(let i = 0; i < roomsArr.length; i++) {
//         if(roomsArr[i][1][roomsArr[i][1].length - 1] === 'K' || roomsArr[i][2] <= 1  && roomsArr[i][3] < 1) {
//             result.push(roomsArr[i][0]);
//         }
//     }
//     kingRooms = result
// }
// // Нахожу комнаты с пометкой Twin
// function findTwin(roomsArr) {
//     let result = [];
//     for(let i = 0; i < roomsArr.length; i++) {
//         if(roomsArr[i][2] == 1 && roomsArr[i][3] == 1) {
//             result.push(roomsArr[i][0]);
//         } else if(roomsArr[i][1][roomsArr[i][1].length - 1] === 'T' && roomsArr[i][3] > 0) {
//             result.push(roomsArr[i][0] + `(${roomsArr[i][3]}+xEB)`);
//         } else if(roomsArr[i][1][roomsArr[i][1].length - 1] === 'T') {
//             result.push(roomsArr[i][0]);
//         } else if(roomsArr[i][2] == 1 && roomsArr[i][3] > 1) {
//             result.push(roomsArr[i][0] + `(${roomsArr[i][3] - 1}+xEB)`);
//         } else if(roomsArr[i][3] > 0) {
//             otherRooms.push(roomsArr[i][0] + `(${roomsArr[i][3]}+xEB)`);
//         }
//     }
//     twinRooms = result
// }

// function findOtherRooms(roomsArr) {
//     let result = [];
//     for(let i = 0; i < roomsArr.length; i++) {

//     }
// }

