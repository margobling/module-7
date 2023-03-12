//начало игры

    //снова ввод первичных чисел пользователем:
    minValue = parseInt(prompt('Минимальное знание числа для игры','0')); 
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

    //проверка на правильность ввода (должно быть целое число):
    if (minValue !== 0) {
        defaultMinValue = 0;
        minValue = minValue || defaultMinValue;
    }
    if (maxValue !== 0) {
        defaultMaxValue = 100;
        maxValue = maxValue || defaultMaxValue; 
    }//если значение не прошло проверку, присваевается дефолтное число

    //проверка на правильность ввода (мин знач должно быть меньше макс знач):
    if (minValue < maxValue) {

        //проверка на величину числа (должно быть от -999 до 999):
        (minValue <= -1000)?
            minValue = -999:
            minValue = minValue;

        (maxValue >= 1000)?
            maxValue = 999:
            maxValue = maxValue;
        //если число не прошло проверку, присваивается граница
    
        //выводится сообщение:
        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`); 

        //снова вычисляется предположение ответа:
        answerNumber  = Math.floor((minValue + maxValue) / 2); 
        orderNumber = 1; 
        gameRun = true; 
        orderNumberField.innerText = orderNumber;
        //выбирается фраза: 
        const phraseRandom1 = Math.round( Math.random() * 3); 
            if (phraseRandom1 === 0) {
                const answerPhrase1 = `Ну что ж, это ${answerNumber }?`;
            }
            if (phraseRandom1 === 1) {
                answerPhrase1 = `Легко, это ${answerNumber }?`;
            }
            if (phraseRandom1 === 2) {
                answerPhrase1 = `Хорошо, это ${answerNumber }?`;
            }
            if (phraseRandom1 === 3) {
                answerPhrase1 = `Наверное, это ${answerNumber }?`;
            }
            //выводится выбранная фраза:
            answerField.innerText = answerPhrase1;

    }else{ //если число не прошло проверку, выводится фиксированное сообщение:
        const orderNumberField = document.getElementById('orderNumberField'); 
        let orderNumber = 1;
        orderNumberField.innerText = orderNumber;
        alert('Вы сами то такое можете угадать?');
        answerField.innerText = 'Нажмите кнопку "Заново"';
    }


//при нажатии на Заново:
    document.getElementById('btnRetry').addEventListener('click', function () { 
        minValue = 0; 
        maxValue = 100;
        answerNumber = 0;
        //снова ввод первичных чисел пользователем:
        minValue = parseInt(prompt('Минимальное знание числа для игры','0')); 
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

        //проверка на правильность ввода (должно быть целое число):
        if (minValue !== 0) {
            defaultMinValue = 0;
            minValue = minValue || defaultMinValue;
        }
        if (maxValue !== 0) {
            defaultMaxValue = 100;
            maxValue = maxValue || defaultMaxValue; 
        }//если значение не прошло проверку, присваевается дефолтное число

        //проверка на правильность ввода (мин знач должно быть меньше макс знач):
        if (minValue < maxValue) {

           //проверка на величину числа (должно быть от -999 до 999):
            (minValue <= -1000)?
                minValue = -999:
                minValue = minValue;
    
            (maxValue >= 1000)?
                maxValue = 999:
                maxValue = maxValue;
            //если число не прошло проверку, присваивается граница
            
            //выводится сообщение:
            alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`); 

            //снова вычисляется предположение ответа:
            answerNumber  = Math.floor((minValue + maxValue) / 2); 
            orderNumber = 1; 
            gameRun = true; 
            orderNumberField.innerText = orderNumber;
            //выводится фиксированная фраза: 
            answerField.innerText = `Давайте снова... Это ${answerNumber }?`;

        }else{ //если число не прошло проверку, выводится фиксированное сообщение:
            const orderNumberField = document.getElementById('orderNumberField'); 
            let orderNumber = 1;
            orderNumberField.innerText = orderNumber;
            alert('Вы сами то такое можете угадать?');
            answerField.innerText = 'Нажмите кнопку "Заново"';
        }
    })
    //далее снова ждем ответ пользователя...


//при нажатии на Больше:
    document.getElementById('btnOver').addEventListener('click', function () { 
        if (gameRun){ 
            if (minValue === maxValue){ //если мин знач и макс знач равны, то игра прекращается с фразами на выбор:
                const phraseRandom = Math.round( Math.random()); 
                const answerPhrase = (phraseRandom === 1) ? 
                    `Вы загадали неправильное число!\n\u{1F914}` : 
                    `Я сдаюсь..\n\u{1F92F}`; 
                answerField.innerText = answerPhrase; 
                gameRun = false; 
            } else { //иначе если они не равны, игра продолжается с фиксированной фразой:
                minValue = answerNumber  + 1; 
                answerNumber  = Math.floor((minValue + maxValue) / 2);
                orderNumber++; 
                orderNumberField.innerText = orderNumber; 
                answerField.innerText = `Больше? Это ${answerNumber }?`; 
            }
        }
    })
    //далее снова ждем ответ пользователя...

//при нажатии на Меньше:
    document.getElementById('btnLess').addEventListener('click', function () { 
        if (gameRun){  
            if (minValue === maxValue || answerNumber <= minValue){ //если мин знач равно макс знач ИЛИ число ответ меньше мин знач, игра прекращается с фразами на выбор:
                const phraseRandom = Math.round( Math.random()); 
                const answerPhrase = (phraseRandom === 1) ? 
                    `Вы загадали неправильное число!\n\u{1F914}` : 
                    `Я сдаюсь..\n\u{1F92F}`; 
                answerField.innerText = answerPhrase; 
                gameRun = false; 
            } else { //иначе если все ок - игра продолжается с фиксированной фразой:
                maxValue = answerNumber; 
                answerNumber  = Math.floor((minValue + maxValue) / 2); 
                orderNumber++; 
                orderNumberField.innerText = orderNumber; 
                answerField.innerText = `Меньше? Тогда это ${answerNumber }?`; 
            }
        }
    })
    //далее снова ждем ответ пользователя...


//при нажатии на Верно:
    document.getElementById('btnEqual').addEventListener('click', function () { 
        const phraseRandom1 = Math.round( Math.random() * 3); //выбирается фраза ответ, игра окончена:
            if (phraseRandom1 === 0) {
                answerPhrase1 = `Я умный!`;
            }
            if (phraseRandom1 === 1) {
                answerPhrase1 = `Я всегда угадываю!`;
            }
            if (phraseRandom1 === 2) {
                answerPhrase1 = `Ура!`;
            }
            if (phraseRandom1 === 3) {
                answerPhrase1 = `Железный - значит, умный!`;
            }
        if (gameRun){ 
            answerField.innerText = answerPhrase1 
            gameRun = false; 
        }
    })
    //игра окончена