let m = 5;
let m1 = 0.01;
let m2 = 0.25;
let m3 = 2.5;
let m4 = 50;
let m5 = 600;
let m6 = 10000;

let count1 = 0;
let count2 = 0;
let count3 = 0;

let busness1 = 0;
let busness2 = 0;
let busness3 = 0;
let busness4 = 0;
let busness5 = 0;
let busness6 = 0;

document.getElementById('im1').onclick = () => {
    let money = document.getElementById('mon');
    let currentValue = parseFloat(money.value);
    money.value = (currentValue + m).toFixed(2) + '$';
    document.getElementById('dollarid1').classList.add('dollar');
    document.getElementById('dollarid1').textContent = '$'; 
    document.getElementById('dollarid2').classList.add('dollar1');
    document.getElementById('dollarid2').textContent = '$'; 
    document.getElementById('dollarid3').classList.add('dollar2');
    document.getElementById('dollarid3').textContent = '$'; 
    document.getElementById('dollarid4').classList.add('dollar3');
    document.getElementById('dollarid4').textContent = '$';
    
    setTimeout(() => { 
        document.getElementById('dollarid1').classList.remove('dollar');
        document.getElementById('dollarid1').textContent = '';  
    }, 400);

    setTimeout(() => { 
        document.getElementById('dollarid2').classList.remove('dollar1');
        document.getElementById('dollarid2').textContent = ''; 
    }, 300);

    setTimeout(() => { 
        document.getElementById('dollarid3').classList.remove('dollar2');
        document.getElementById('dollarid3').textContent = ''; 
    }, 300);
    
    setTimeout(() => { 
        document.getElementById('dollarid4').classList.remove('dollar3');
        document.getElementById('dollarid4').textContent = ''; 
    }, 300);
}

document.getElementById('assets').onclick = () => {
    document.getElementById('block').style.display = 'flex'; 
}

document.getElementById('block').onclick = () => {
    document.getElementById('block').style.display = 'none'; 
}

document.getElementById('assets2').onclick = () => {
    document.getElementById('block2').style.display = 'flex'; 
}

document.getElementById('block2').onclick = () => {
    document.getElementById('block2').style.display = 'none'; 
}

document.getElementById('assets3').onclick = () => {
    document.getElementById('block3').style.display = 'flex'; 
}

document.getElementById('block3').onclick = () => {
    document.getElementById('block3').style.display = 'none'; 
}

function showPopup() { 
    let popupWindow = document.getElementById('popup_window'); 
    document.getElementById('popup').style.display = 'flex'; 
    popupWindow.classList.remove('pop'); 
    setTimeout(() => { 
        popupWindow.classList.add('pop'); 
    }, 10); 
} 

function hidePopup() { 
    let popupWindow = document.getElementById('popup_window'); 
    popupWindow.classList.remove('pop');  
    setTimeout(() => { 
        document.getElementById('popup').style.display = 'none'; 
    }, 2000); 
    } 

document.getElementById('img1').onclick = () => { 
    let money = document.getElementById('mon'); 
    let currentValue = parseFloat(money.value); 

    if (currentValue >= 1) { 
        currentValue -= 1; 
        busness1++;
        money.value = currentValue.toFixed(2) + '$'; 

        document.getElementById('txt').textContent = 'The purchase was successfully completed';

        setInterval(() => { 
            currentValue = parseFloat(money.value); 
            money.value = (currentValue + m1).toFixed(2) + '$'; 
        }, 1000); 

        showPopup(); 
        setTimeout(hidePopup, 3000); 
    } else {
        document.getElementById('txt').textContent = 'not enough funds';
        showPopup(); 
        setTimeout(hidePopup, 3000); 
    } 
}

document.getElementById('img2').onclick = () => {
    let money = document.getElementById('mon');
    let currentValue = parseFloat(money.value);

    if (currentValue >= 500) { 
        currentValue -= 500; 
        busness2++;
        money.value = currentValue.toFixed(2) + '$'; 

        document.getElementById('txt').textContent = 'The purchase was successfully completed';

        setInterval(() => { 
            currentValue = parseFloat(money.value); 
            money.value = (currentValue + m2).toFixed(2) + '$'; 
        }, 1000); 

        showPopup(); 
        setTimeout(hidePopup, 3000); 
    } else {
        document.getElementById('txt').textContent = 'not enough funds';
        showPopup(); 
        setTimeout(hidePopup, 3000); 
    } 
}

document.getElementById('img3').onclick = () => {
    let money = document.getElementById('mon');
    let currentValue = parseFloat(money.value);

    if (currentValue >= 5000) { 
        currentValue -= 5000; 
        busness3++;
        money.value = currentValue.toFixed(2) + '$'; 

        document.getElementById('txt').textContent = 'The purchase was successfully completed';

        setInterval(() => { 
            currentValue = parseFloat(money.value); 
            money.value = (currentValue + m3).toFixed(2) + '$'; 
        }, 1000); 

        showPopup(); 
        setTimeout(hidePopup, 3000); 
    } else {
        document.getElementById('txt').textContent = 'not enough funds';
        showPopup(); 
        setTimeout(hidePopup, 3000); 
    } 
}

document.getElementById('img4').onclick = () => {
    let money = document.getElementById('mon');
    let currentValue = parseFloat(money.value);

    if (currentValue >= 50000) { 
        currentValue -= 50000; 
        busness4++;
        money.value = currentValue.toFixed(2) + '$'; 

        document.getElementById('txt').textContent = 'The purchase was successfully completed';

        setInterval(() => { 
            currentValue = parseFloat(money.value); 
            money.value = (currentValue + m4).toFixed(2) + '$'; 
        }, 1000); 

        showPopup(); 
        setTimeout(hidePopup, 3000); 
    } else {
        document.getElementById('txt').textContent = 'not enough funds';
        showPopup(); 
        setTimeout(hidePopup, 3000); 
    } 
}

document.getElementById('img5').onclick = () => {
    let money = document.getElementById('mon');
    let currentValue = parseFloat(money.value);

    if (currentValue >= 600000) { 
        currentValue -= 600000; 
        busness5++;
        money.value = currentValue.toFixed(2) + '$'; 

        document.getElementById('txt').textContent = 'The purchase was successfully completed';

        setInterval(() => { 
            currentValue = parseFloat(money.value); 
            money.value = (currentValue + m5).toFixed(2) + '$'; 
        }, 1000); 

        showPopup(); 
        setTimeout(hidePopup, 3000); 
    } else {
        document.getElementById('txt').textContent = 'not enough funds';
        showPopup(); 
        setTimeout(hidePopup, 3000); 
    } 
}

document.getElementById('img6').onclick = () => {
    let money = document.getElementById('mon');
    let currentValue = parseFloat(money.value);

    if (currentValue >= 10000000) { 
        currentValue -= 10000000; 
        busness6++;
        money.value = currentValue.toFixed(2) + '$'; 

        document.getElementById('txt').textContent = 'The purchase was successfully completed';

        setInterval(() => { 
            currentValue = parseFloat(money.value); 
            money.value = (currentValue + m6).toFixed(2) + '$'; 
        }, 1000); 

        showPopup(); 
        setTimeout(hidePopup, 3000); 
    } else {
        document.getElementById('txt').textContent = 'not enough funds';
        showPopup(); 
        setTimeout(hidePopup, 3000); 
    } 
}

document.getElementById('img8').onclick = () => {
    let pr = document.getElementById('file1');
    let lvl = document.getElementById('lvl1');
    let value1 = parseFloat(lvl1.textContent);
    let im7Title = document.getElementById('img8').title;
    let money = document.getElementById('mon');
    let currentValue = parseFloat(money.value);
    let im7 = parseFloat(im7Title.match(/[0-9.]+/)[0]);

    if (pr.value == 75){
        document.getElementById('img8').classList.remove('img81');
        document.getElementById('img8').classList.add('img8');
    }

    if (pr.value == 100) {
        document.getElementById('txt').textContent = 'max level reached';
        showPopup();
        setTimeout(hidePopup, 3000);
    } else if (currentValue < im7) {
        document.getElementById('txt').textContent = 'not enough funds';
        showPopup();
        setTimeout(hidePopup, 3000);
    } else if (currentValue >= im7) {
        currentValue -= im7;
        money.value = currentValue.toFixed(2) + '$';

        document.getElementById('img8').title = 'Price: ' + (im7 * 2).toFixed(0) + ' $';
        lvl.textContent = (value1 + 1) + ' Level';

        pr.value = parseFloat(pr.value) + 25;

        document.getElementById('txt').textContent = 'The purchase was successfully completed';
        showPopup();
        setTimeout(hidePopup, 3000);

        switch(value1){
            case 0:
                document.getElementById('im1').src = '2-этап.png';
                break;
            case 1:
                document.getElementById('im1').src = '3-этап.png';
                break;
            case 2:
                document.getElementById('im1').src = '4-этап.png';
                break;
            case 3:
                document.getElementById('im1').src = '5-этап.png';
                break;
        }
    }
}

document.getElementById('img9').onclick = () => {
    let im7Title = document.getElementById('img9').title;
    let money = document.getElementById('mon');
    let currentValue = parseFloat(money.value);
    let im7 = parseFloat(im7Title.match(/[0-9.]+/)[0]);

    if(count1 == 1){
        document.getElementById('body').className = '';
        document.getElementById('body').classList.add('body2')
        document.getElementById('mo').style.margin = '6%';
        document.getElementById('mon').className = '';
        document.getElementById('mon').classList.add('mon2')
    }

    else if (currentValue < im7) {
        document.getElementById('txt').textContent = 'not enough funds';
        showPopup();
        setTimeout(hidePopup, 3000);
    } else if (currentValue >= im7) {
        count1++;

        currentValue -= im7;
        money.value = currentValue.toFixed(2) + '$';

        document.getElementById('body').className = '';
        document.getElementById('body').classList.add('body2')
        document.getElementById('mo').style.margin = '6%';
        document.getElementById('mon').className = '';
        document.getElementById('mon').classList.add('mon2')

        document.getElementById('txt').textContent = 'The purchase was successfully completed';
        showPopup();
        setTimeout(hidePopup, 3000);

        document.getElementById('img9').classList.remove('img91');
        document.getElementById('img9').classList.add('img9');

        document.getElementById('img9').title = 'Price: 0$';
    }
}

document.getElementById('img10').onclick = () => {
    let im7Title = document.getElementById('img10').title;
    let money = document.getElementById('mon');
    let currentValue = parseFloat(money.value);
    let im7 = parseFloat(im7Title.match(/[0-9.]+/)[0]);

    if(count2 == 1){
        document.getElementById('body').className = '';
        document.getElementById('body').classList.add('body3')
        document.getElementById('mo').style.margin = '6%';
        document.getElementById('mon').className = '';
        document.getElementById('mon').classList.add('mon')
    }

    else if (currentValue < im7) {
        document.getElementById('txt').textContent = 'not enough funds';
        showPopup();
        setTimeout(hidePopup, 3000);
    } else if (currentValue >= im7) {
        count2++;

        currentValue -= im7;
        money.value = currentValue.toFixed(2) + '$';

        document.getElementById('body').className = '';
        document.getElementById('body').classList.add('body3')
        document.getElementById('mo').style.margin = '6%';
        document.getElementById('mon').className = '';
        document.getElementById('mon').classList.add('mon')

        document.getElementById('txt').textContent = 'The purchase was successfully completed';
        showPopup();
        setTimeout(hidePopup, 3000);

        document.getElementById('img10').classList.remove('img101');
        document.getElementById('img10').classList.add('img10');

        document.getElementById('img10').title = 'Price: 0$';
    }
}

document.getElementById('img11').onclick = () => {
    let im7Title = document.getElementById('img11').title;
    let money = document.getElementById('mon');
    let currentValue = parseFloat(money.value);
    let im7 = parseFloat(im7Title.match(/[0-9.]+/)[0]);

    if(count3 == 1){
        document.getElementById('body').className = '';
        document.getElementById('body').classList.add('body4')
        document.getElementById('mo').style.margin = '2%';
        document.getElementById('mon').className = '';
        document.getElementById('mon').classList.add('mon')
    }

    else if (currentValue < im7) {
        document.getElementById('txt').textContent = 'not enough funds';
        showPopup();
        setTimeout(hidePopup, 3000);
    } else if (currentValue >= im7) {
        count3++;

        currentValue -= im7;
        money.value = currentValue.toFixed(2) + '$';

        document.getElementById('body').className = '';
        document.getElementById('body').classList.add('body4')
        document.getElementById('mo').style.margin = '2%';
        document.getElementById('mon').className = '';
        document.getElementById('mon').classList.add('mon')

        document.getElementById('txt').textContent = 'The purchase was successfully completed';
        showPopup();
        setTimeout(hidePopup, 3000);

        document.getElementById('img11').classList.remove('img111');
        document.getElementById('img11').classList.add('img11');

        document.getElementById('img11').title = 'Price: 0$';
    }
}

document.getElementById('img7').onclick = () => {
    let pr = document.getElementById('file');
    let lvl = document.getElementById('lvl');
    let value1 = parseFloat(lvl.textContent);
    let im7Title = document.getElementById('img7').title;
    let money = document.getElementById('mon');
    let currentValue = parseFloat(money.value);
    let im7 = parseFloat(im7Title.match(/[0-9.]+/)[0]);

    if (pr.value == 95){
        document.getElementById('img7').classList.remove('img71');
        document.getElementById('img7').classList.add('img7');
    }

    if (pr.value == 100) {
        document.getElementById('txt').textContent = 'max level reached';
        showPopup();
        setTimeout(hidePopup, 3000);
    } else if (currentValue < im7) {
        document.getElementById('txt').textContent = 'not enough funds';
        showPopup();
        setTimeout(hidePopup, 3000);
    } else if (currentValue >= im7) {
        currentValue -= im7;
        money.value = currentValue.toFixed(2) + '$';

        document.getElementById('img7').title = 'Price: ' + (im7 * 1.5).toFixed(0) + ' $';
        m *= 1.8;
        lvl.textContent = (value1 + 1) + ' Level';
        document.getElementById('clk').textContent = 'click: ' + m.toFixed(2) + '$';

        pr.value = parseFloat(pr.value) + 5;

        document.getElementById('txt').textContent = 'The purchase was successfully completed';
        showPopup();
        setTimeout(hidePopup, 3000);
    }
}

document.getElementById('state').onclick = () => {
    let money = document.getElementById('mon');
    let currentValue = parseFloat(money.value);

    document.getElementById('block4').style.display = 'flex'; 
    document.getElementById('txt1').textContent = 'statistics:';
    document.getElementById('txt2').textContent = `number of assets: ${busness1}`;
    document.getElementById('txt3').textContent = `for the amount: ${busness1 * 1}$`;
    document.getElementById('txt4').textContent = `number of shawarma shops: ${busness2}`;
    document.getElementById('txt5').textContent = `for the amount: ${busness2 * 500}$`;
    document.getElementById('txt6').textContent = `number of cafes: ${busness3}`;
    document.getElementById('txt7').textContent = `for the amount: ${busness3 * 5000}$`;
    document.getElementById('txt8').textContent = `number of night clubs: ${busness4}`;
    document.getElementById('txt9').textContent = `for the amount: ${busness4 * 50000}$`;
    document.getElementById('txt10').textContent = `number of IT companies: ${busness5}`;
    document.getElementById('txt11').textContent = `for the amount: ${busness5 * 600000}$`;
    document.getElementById('txt12').textContent = `number of microsoft companies: ${busness6}`;
    document.getElementById('txt13').textContent = `for the amount: ${busness6 * 10000000}$`;
    document.getElementById('txt14').textContent = `general condition: ${busness1 * 1 + busness2 * 500 + busness3 * 5000 + busness4 * 50000 + busness5 * 600000 + busness6 * 10000000 + currentValue}$`;
}

document.getElementById('block4').onclick = () => {
    document.getElementById('block4').style.display = 'none'; 
}