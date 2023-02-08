allBlue = ['b01', 'b02', 'b03', 'b04', 'b05', 'b06', 'b07', 'b08', 'b09', 'b10'];
allGreen = ['g01', 'g02', 'g03', 'g04', 'g05', 'g06', 'g07', 'g08', 'g09', 'g10'];
allYellow = ['y01', 'y02', 'y03', 'y04', 'y05', 'y06', 'y07', 'y08', 'y09', 'y10'];
allRed = ['r01', 'r02', 'r03', 'r04', 'r05', 'r06', 'r07', 'r08', 'r09', 'r10'];

blueList = [];
greenList = [];
redList = [];
yellowList = [];
greyCount = 0;

function scoreColor(n) {
    s = 0;
    switch (n) {
        case 12: s += 12;
        case 11: s += 11;
        case 10: s += 10;
        case 9: s += 9;
        case 8: s += 8;
        case 7: s += 7;
        case 6: s += 6;
        case 5: s += 5;
        case 4: s += 4;
        case 3: s += 3;
        case 2: s += 2;
        case 1: s += 1;
    }
    return s;
}

function setScore() {
    document.getElementById('score').innerHTML = scoreColor(blueList.length) +
        scoreColor(greenList.length) + scoreColor(yellowList.length) +
        scoreColor(redList.length) - (greyCount * 5);
}

function disableLower(thisId, list) {
    for (let id of list) {
        console.log(id, thisId);
        document.getElementById(id).disabled = id < thisId;
    }
}

function btnPress(e, lock) {
    if (!e.disabled) {
        switch (e.className) {
            case 'success':
            e.className = 'outline-success';
            if (!lock || greenList[greenList.length-2] === 'g11') {
                greenList.pop();
            }
            disableLower(greenList[greenList.length-1], allGreen);
            document.getElementById('g11').disabled = greenList.length < 5 || document.getElementById('g12').className === 'success';
            break;
            case 'outline-success':
            e.className = 'success';
            if (!lock || greenList[greenList.length-1] === 'g11') {
                greenList.push(e.id);
            }
            disableLower(e.id, allGreen);
            document.getElementById('g11').disabled = greenList.length < 5 || document.getElementById('g12').className === 'success';
            break;


            case 'primary':
            e.className = 'outline-primary';
            if (!lock || blueList[blueList.length-2] === 'b11') {
                blueList.pop();
            }
            disableLower(blueList[blueList.length-1], allBlue);
            document.getElementById('b11').disabled = blueList.length < 5 || document.getElementById('b12').className === 'primary';
            break;
            case 'outline-primary':
            e.className = 'primary';
            if (!lock || blueList[blueList.length-1] === 'b11') {
                blueList.push(e.id);
            }
            disableLower(e.id, allBlue);
            document.getElementById('b11').disabled = blueList.length < 5 || document.getElementById('b12').className === 'primary';
            break;


            case 'warning':
            e.className = 'outline-warning';
            if (!lock || yellowList[yellowList.length-2] === 'y11') {
                yellowList.pop();
            }
            disableLower(yellowList[yellowList.length-1], allYellow);
            document.getElementById('y11').disabled = yellowList.length < 5 || document.getElementById('y12').className === 'warning';
            break;
            case 'outline-warning':
            e.className = 'warning';
            if (!lock || yellowList[yellowList.length-1] === 'y11') {
                yellowList.push(e.id);
            }
            disableLower(e.id, allYellow);
            document.getElementById('y11').disabled = yellowList.length < 5 || document.getElementById('y12').className === 'warning';
            break;


            case 'danger':
            e.className = 'outline-danger';
            if (!lock || redList[redList.length-2] === 'r11') {
                redList.pop();
            }
            disableLower(redList[redList.length-1], allRed);
            document.getElementById('r11').disabled = redList.length < 5 || document.getElementById('r12').className === 'danger';
            break;
            case 'outline-danger':
            e.className = 'danger';
            if (!lock || redList[redList.length-1] === 'r11') {
                redList.push(e.id);
            }
            disableLower(e.id, allRed);
            document.getElementById('r11').disabled = redList.length < 5 || document.getElementById('r12').className === 'danger';
            break;


            case 'dark':
            e.className = 'outline-dark';
            greyCount -= 1;
            break;
            case 'outline-dark':
            e.className = 'dark';
            greyCount += 1;
            break;
        }
    }
    setScore();
}
