var mdo1 = prompt('Введите первое слово'),
    mdo2 = prompt('Введите второе слово'),
    sum1 = 0,
    sum2 = 0;
if (mdo2.length == mdo1.length){
    for (var i = 0; i < mdo1.length; i++){
        var one = mdo1.indexOf(mdo2[i]),
            two = mdo1.indexOf(mdo1[i]);
        sum1 = sum1+one;
        sum2 = sum2+two;
    }
    if (sum1 == sum2){
        alert('Верно');
    } else {alert('Не верно');}
} else {alert('Не верно')}