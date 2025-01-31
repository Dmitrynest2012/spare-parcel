// Создаем элемент кнопки
const hamburgerButton = document.createElement('button');
hamburgerButton.id = "hamburger-button";
hamburgerButton.classList.add('hamburger-button'); // Добавляем класс для стилей кнопки

// Устанавливаем символ иконки кнопки
const iconSymbol = document.createTextNode('≡ ');
hamburgerButton.appendChild(iconSymbol);



// Добавляем кнопку в тело документа
document.body.appendChild(hamburgerButton);





let isHamburgerActive = false;

// Функция для обновления состояния кнопки "Гамбургер" и создания/удаления контейнера "меню на ресурсы"
function toggleHamburger() {
    isHamburgerActive = !isHamburgerActive; // Инвертируем состояние кнопки "Гамбургер"
    updateHamburgerButtonState(); // Обновляем состояние кнопки "Гамбургер"
    
    // Получаем ссылку на контейнер "меню на ресурсы"
    const menuContainer = document.getElementById('menu-container');

    // Если кнопка "Гамбургер" активна, создаем контейнер "меню на ресурсы" и добавляем его в тело документа
    if (isHamburgerActive) {
        const newMenuContainer = document.createElement('div');
        newMenuContainer.id = 'menu-container';
        newMenuContainer.classList.add('menu-container');

        // Создаем заголовок "Ссылки на основные ресурсы"
        const title1 = document.createElement('h2');
        title1.textContent = 'Ссылки на основные ресурсы:';
        title1.classList.add('h2White');
        newMenuContainer.appendChild(title1);

        // Создаем кнопку Академия с ссылкой
        const linkButton1 = document.createElement('button');
        linkButton1.id = 'resource-link-button1';
        linkButton1.classList.add('encryptText');
        linkButton1.innerHTML = 'Академия'; // Текст кнопки
        linkButton1.addEventListener('click', function() {
            // Открываем ссылку в новой вкладке
            window.open('https://akegn.ru/', '_blank');
        });
        newMenuContainer.appendChild(linkButton1);

        // Создаем кнопку Доктрина с ссылкой
        const linkButton2 = document.createElement('button');
        linkButton2.id = 'resource-link-button2';
        linkButton2.classList.add('encryptText');
        linkButton2.innerHTML = 'Доктрина'; // Текст кнопки
        linkButton2.addEventListener('click', function() {
            // Открываем ссылку в новой вкладке
            window.open('https://doktrina.info/?yclid=3755516742685425663', '_blank');
        });
        newMenuContainer.appendChild(linkButton2);

        // Создаем кнопку Благая весть с ссылкой
        const linkButton3 = document.createElement('button');
        linkButton3.id = 'resource-link-button3';
        linkButton3.classList.add('encryptText');
        linkButton3.innerHTML = 'Благая Весть'; // Текст кнопки
        linkButton3.addEventListener('click', function() {
            // Открываем ссылку в новой вкладке
            window.open('https://blagayavest.info/', '_blank');
        });
        newMenuContainer.appendChild(linkButton3);


        // Создаем заголовок "Прочее"
        const title2 = document.createElement('h2');
        title2.textContent = 'Прочее:';
        title2.classList.add('h2White');
        newMenuContainer.appendChild(title2);


        // Создаем кнопку Справка с ссылкой
        const linkButton7 = document.createElement('button');
        linkButton7.id = 'resource-link-button7';
        linkButton7.classList.add('encryptText');
        linkButton7.innerHTML = 'Чат Андромеда'; // Текст кнопки
        linkButton7.addEventListener('click', function() {
            // Замените на фактическую ссылку
            window.location.href = "../andromeda-chat.html";
        });
        newMenuContainer.appendChild(linkButton7);

        // Создаем кнопку Календарь с ссылкой
        const linkButton4 = document.createElement('button');
        linkButton4.id = 'resource-link-button4';
        linkButton4.classList.add('encryptText');
        linkButton4.innerHTML = 'Календарь'; // Текст кнопки
        linkButton4.addEventListener('click', function() {
            // Замените на фактическую ссылку
            window.location.href = "../calendar.html";
        });
        newMenuContainer.appendChild(linkButton4);

        // Создаем кнопку Посылы с ссылкой
        const linkButton5 = document.createElement('button');
        linkButton5.id = 'resource-link-button5';
        linkButton5.classList.add('encryptText');
        linkButton5.innerHTML = 'Посылы'; // Текст кнопки
        linkButton5.addEventListener('click', function() {
            // Замените на фактическую ссылку
            window.location.href = "https://message-of-love.ru/";
        });
        newMenuContainer.appendChild(linkButton5);

        // Создаем кнопку Календарь с ссылкой
        const linkButton6 = document.createElement('button');
        linkButton6.id = 'resource-link-button6';
        linkButton6.classList.add('encryptText');
        linkButton6.innerHTML = 'Кроссворды'; // Текст кнопки
        linkButton6.addEventListener('click', function() {
            // Открываем ссылку в новой вкладке
            window.open('https://creators-crossword-puzzle16.glitch.me/', '_blank');
        });
        newMenuContainer.appendChild(linkButton6);



        
        

        // Добавляем контейнер в тело документа
        document.body.appendChild(newMenuContainer);
    } else {
        // Если кнопка "Гамбургер" неактивна и контейнер существует, удаляем его из документа
        if (menuContainer) {
            menuContainer.parentNode.removeChild(menuContainer);
        }
    }
}




// Функция для обновления внешнего вида кнопки "Гамбургер" в соответствии с состоянием
function updateHamburgerButtonState() {
    const hamburgerButton = document.getElementById('hamburger-button');
    if (!hamburgerButton) return;

    if (isHamburgerActive) {
        hamburgerButton.style.backgroundColor = 'rgba(128, 0, 128, 0.5)';
        
    } else {
        hamburgerButton.style.backgroundColor = 'rgba(128, 0, 128, 0.15)';
        
    }
}



// Функция для делания кнопки "Гамбургер" неактивной
function disableHamburgerButton() {
    if (hamburgerButton) {
        hamburgerButton.disabled = true;
    }
}

// Функция для делания кнопки "Гамбургер" активной
function enableHamburgerButton() {
    if (hamburgerButton) {
        hamburgerButton.disabled = false;
    }
}




// Добавляем обработчик события наведения мыши на кнопку "Гамбургер"
hamburgerButton.addEventListener('mouseenter', function() {
        hamburgerButton.style.backgroundColor = 'rgba(128, 0, 128, 0.75)';

});

// Добавляем обработчик события увода мыши с кнопки изображения
hamburgerButton.addEventListener('mouseleave', function() {
    // Возвращаем исходный цвет фона кнопки
    hamburgerButton.style.backgroundColor = isHamburgerActive ? 'rgba(128, 0, 128, 0.5)' : 'rgba(128, 0, 128, 0.15)';
});


// Добавляем обработчик события клика на кнопку "Гамбургер"
if (hamburgerButton) {
    hamburgerButton.addEventListener('click', function() {
        toggleHamburger();
    });
}








const buttonAndromeda = document.getElementById('andromeda-button');
  let buttonAndromedaActive = false;



 // Функция для проверки состояния первого запуска Андромеды
function isFirstLaunch() {
    return localStorage.getItem('firstLaunch') !== 'true'; // Если первый запуск, вернуть true
}

// Функция для установки состояния первого запуска Андромеды
function setFirstLaunch() {
    localStorage.setItem('firstLaunch', 'true');
}

// Функция для обновления состояния кнопки изображения и сохранения состояния в локальное хранилище
function toggleAndromeda() {
    if (isFirstLaunch()) {
        const audio = new Audio("../andromeda_first_message.mp3");
            audio.play();


        setFirstLaunch(); // Устанавливаем состояние первого запуска
    }
    
    buttonAndromedaActive = true; // Инвертируем состояние кнопки Андромеды
    updateAndromedaButtonState(); // Обновляем состояние кнопки изображения
    startListening();
}


  
  // Функция для обновления внешнего вида кнопки изображения в соответствии с состоянием
  function updateAndromedaButtonState() {
      if (buttonAndromedaActive) {
        buttonAndromeda.style.backgroundColor = 'rgba(128, 0, 128, 0.5)';

      } else {
        buttonAndromeda.style.backgroundColor = 'rgba(128, 0, 128, 0.15)';

      }
  }



      
 // Функция для делания кнопки неактивной
function disableButtonAndromeda() {

    if (buttonAndromeda) {
        buttonAndromeda.disabled = true;
    }
}

// Функция для делания кнопки активной
function enableButtonAndromeda() {

    if (buttonAndromeda) {
        buttonAndromeda.disabled = false;
    }
}


// Добавляем обработчик события наведения мыши на кнопку изображения
buttonAndromeda.addEventListener('mouseenter', function() {
    // Задаем цвет фона кнопке
    buttonAndromeda.style.backgroundColor = 'rgba(128, 0, 128, 0.75)'; // Новый цвет фона кнопки
});

// Добавляем обработчик события увода мыши с кнопки изображения
buttonAndromeda.addEventListener('mouseleave', function() {
    // Возвращаем исходный цвет фона кнопки
    buttonAndromeda.style.backgroundColor = buttonAndromedaActive ? 'rgba(128, 0, 128, 0.5)' : 'rgba(128, 0, 128, 0.15)';
}); 
      
    

      

const qaPairs = [
    { 
        questions: ["Покажи Академию", "Покажи Академи", "Покажи Акодеми", "Покажи Акадими",
        "Открой Академию", "Аткрой Академию", "Открой Академи", "Аткрой Академи",
        "Открой сайт Академии", "Аткрой сайт Академии",
        "Открой сайт Академи", "Аткрой сайт Академи"], 
        answer: "../open_academy.mp3", 
        type: "переход по ссылке на Академию" 
    },
    { 
        questions: ["Открой сайт Катрен", "Открой сайт Катренов", "Аткрой сайт Катренов", "Открой сайт Катренов",
        "Аткрой сайт Катрен", "Открой сайт Катрен", "Открой Катрен", "Актрой Катрен", "Открой Катрены", "Аткрой Катрены",
        "Покажи Катрены", "Покажи Катрен"], 
        answer: "../katrens_opens.mp3", 
        type: "переход по ссылке на Катрены" 
    },
    { 
        questions: ["Открой сайт Доктрин", "Открой сайт Доктрины", "Аткрой сайт Доктрин", "Аткрой сайт Доктрины",
        "Покажи Доктрину", "Покажи Доктрин"], 
        answer: "../open_doctrina.mp3", 
        type: "переход по ссылке на Доктрину" 
    },
    { 
        questions: ["Открой сайт Посыла", "Открой сайт Посыло", "Аткрой сайт Посыла", "Аткрой сайт Посыло",
        "Покажи Посыл", "Покажи Посылы"], 
        answer: "../open_suit_messages.mp3", 
        type: "переход по ссылке на Посыл" 
    },
    { 
        questions: ["Открой сайт Календаря", "Открой сайт Календар", "Аткрой сайт Календаря", "Аткрой сайт Календар",
        "Открой сайт Колендаря", "Открой сайт Колендаря", "Покажи Колендарь", "Покажи Календарь"], 
        answer: "../I_open_the_calendar.mp3", 
        type: "переход по ссылке на Календарь" 
    },
    { 
        questions: ["Открой сайт чата", "Открой сайт чат", "Аткрой сайт чата", "Аткрой сайт чат", "Открой чат", "Аткрой чат",
        "Покажи чат"], 
        answer: "../open_chat.mp3", 
        type: "переход по ссылке на Чат" 
    },


    { 
        questions: ["Как вступить в КОСМ", "Хочу вступить в КОСМ", "Как присоединиться к КОСМ" ], 
        answer: "../new_member.mp3",
        type: "вступление в КОСМ" 
    },


    { 
        questions: ["Скачать катрены 2016"], 
        answer: "../downloading_quatrains.mp3",
        type: "скачать катрены за 2016 год" 
    },

    { 
        questions: ["Скачать катрены 2017"], 
        answer: "../downloading_quatrains.mp3",
        type: "скачать катрены за 2017 год" 
    },

    { 
        questions: ["Скачать катрены 2018"], 
        answer: "../downloading_quatrains.mp3",
        type: "скачать катрены за 2018 год" 
    },

    { 
        questions: ["Скачать катрены 2019"], 
        answer: "../downloading_quatrains.mp3",
        type: "скачать катрены за 2019 год" 
    },

    { 
        questions: ["Скачать катрены 2020"], 
        answer: "../downloading_quatrains.mp3",
        type: "скачать катрены за 2020 год" 
    },

    { 
        questions: ["Скачать катрены 2021"], 
        answer: "../downloading_quatrains.mp3",
        type: "скачать катрены за 2021 год" 
    },

    { 
        questions: ["Скачать катрены 2022"], 
        answer: "../downloading_quatrains.mp3",
        type: "скачать катрены за 2022 год" 
    },

    { 
        questions: ["Скачать катрены 2023"], 
        answer: "../downloading_quatrains.mp3",
        type: "скачать катрены за 2023 год" 
    },

    { 
        questions: ["Скачать Доктрину", "Скачай Доктрину"], 
        answer: "../downloading_the_doctrine.mp3",
        type: "скачать Доктрину" 
    },

    { 
        questions: ["Скачать Святую Русь", "Скачай Святую Русь"], 
        answer: "../downloading_holy_russ.mp3",
        type: "скачать Святую Русь" 
    },
    // Другие вопросы и ответы
];





// Генерируем ссылку на сегодняшний катрен
const currentDateCatren = new Date();
const dayCatren = currentDateCatren.getDate().toString().padStart(2, '0');
const monthCatren = (currentDateCatren.getMonth() + 1).toString().padStart(2, '0');
const yearCatren = currentDateCatren.getFullYear().toString().slice(-2);
const todayCatrenLink = `https://blagayavest.info/poems/${dayCatren}.${monthCatren}.${yearCatren}.html`;

// Генерируем ссылку на вчерашний катрен
const yesterdayDateCatren = new Date(currentDateCatren);
yesterdayDateCatren.setDate(yesterdayDateCatren.getDate() - 1);
const dayYesterdayCatren = yesterdayDateCatren.getDate().toString().padStart(2, '0');
const monthYesterdayCatren = (yesterdayDateCatren.getMonth() + 1).toString().padStart(2, '0');
const yearYesterdayCatren = yesterdayDateCatren.getFullYear().toString().slice(-2);
const yesterdayCatrenLink = `https://blagayavest.info/poems/${dayYesterdayCatren}.${monthYesterdayCatren}.${yearYesterdayCatren}.html`;

// Функция для форматирования даты в формат "dd.mm.yy"
function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}.${month}.${year}`;
}

// Добавляем ссылку на сегодняшний катрен в массив qaPairs
qaPairs.push({ 
    questions: ["Покажи сегодняшний катрен"], 
    answer: "../open_suit.mp3", 
    type: "переход по ссылке на сегодняшний катрен",
    link: todayCatrenLink
});

// Добавляем ссылку на вчерашний катрен в массив qaPairs
qaPairs.push({ 
    questions: ["Покажи вчерашний катрен"], 
    answer: "../open_suit.mp3", 
    type: "переход по ссылке на вчерашний катрен",
    link: yesterdayCatrenLink
});

// Добавляем ссылку на инструкцию в массив qaPairs
qaPairs.push({ 
    questions: ["Покажи инструкцию", "Покажи инструкци", "Открой сайт инструкци", "Открой сайт инструкции"], 
    answer: "../open_suit.mp3", 
    type: "переход по ссылке на инструкцию",
    link: "../andromeda.html"
});






// Добавляем команды "Покажи катрен за (дата)" в массив qaPairs
qaPairs.push({ 
    questions: ["Катрен за"], 
    answer: "../open_suit.mp3", 
    type: "переход по ссылке на катрен за конкретную дату",
    link: function(userInput) {
        const datePattern = /\b(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{2,4})\b/g;
        const match = datePattern.exec(userInput);
        if (!match) return null; // Если дата не распознана, возвращаем null
        const day = match[1].padStart(2, '0');
        const month = match[2].padStart(2, '0');
        const year = match[3].slice(-2);
        const formattedDate = `${day}.${month}.${year}`;
        const link = `https://blagayavest.info/poems/${formattedDate}.html`;
        
        return link;
    }
});








let recognition;

function startListening() {
    
    recognition = new webkitSpeechRecognition();
    recognition.lang = 'ru-RU';
    recognition.continuous = false;



    recognition.onresult = function(event) {
        const userInput = event.results[event.results.length - 1][0].transcript;
        const qa = getQaByQuestion(userInput);

        if (qa.type === "переход по ссылке на Катрены" || 
        qa.type === "переход по ссылке на Академию" ||
        qa.type === "переход по ссылке на Доктрину" ||
        qa.type === "переход по ссылке на сегодняшний катрен" ||
        qa.type === "переход по ссылке на вчерашний катрен" ||
        qa.type === "переход по ссылке на инструкцию" ||
        qa.type === "переход по ссылке на Посыл" ||
        qa.type === "переход по ссылке на Календарь" ||
        qa.type === "переход по ссылке на Чат" ||
        qa.type === "вступление в КОСМ" ||
        qa.type === "скачать катрены за 2016 год" ||
        qa.type === "скачать катрены за 2017 год" ||
        qa.type === "скачать катрены за 2018 год" ||
        qa.type === "скачать катрены за 2019 год" ||
        qa.type === "скачать катрены за 2020 год" ||
        qa.type === "скачать катрены за 2021 год" ||
        qa.type === "скачать катрены за 2022 год" ||
        qa.type === "скачать катрены за 2023 год" ||
        qa.type === "скачать Доктрину" ||
        qa.type === "скачать Святую Русь") {
            const audio = new Audio();
            audio.src = qa.answer; // Устанавливаем ссылку как источник аудиофайла 
            audio.play();
            if (qa.type === "переход по ссылке на Катрены") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "https://blagayavest.info/poems/year.html";
                    });
            } else if (qa.type === "переход по ссылке на Академию") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "https://akegn.ru/";
                    });
            } else if (qa.type === "переход по ссылке на Доктрину") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "https://doktrina.info/";
                    });
            } else if (qa.type === "переход по ссылке на сегодняшний катрен" || 
            qa.type === "переход по ссылке на вчерашний катрен" ) {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = qa.link;
                    });
            } else if (qa.type === "переход по ссылке на инструкцию") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = qa.link;
                    });
            } else if (qa.type === "переход по ссылке на Посыл") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "https://message-of-love.ru/";
                    });
            } else if (qa.type === "переход по ссылке на Календарь") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "../calendar.html";
                    });
            } else if (qa.type === "переход по ссылке на Чат") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "../andromeda-chat.html";
                    });
            } else if (qa.type === "вступление в КОСМ") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "https://xn--c1akeeelbbx.xn--p1ai/kontakty";
                    });
            } else if (qa.type === "скачать катрены за 2016 год") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "../catrens-download/KATRENY--2016.pdf";
                    });
            } else if (qa.type === "скачать катрены за 2017 год") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "../catrens-download/KATRENY--2017.pdf";
                    });
            } else if (qa.type === "скачать катрены за 2018 год") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "../catrens-download/KATRENY--2018.pdf";
                    });
            } else if (qa.type === "скачать катрены за 2019 год") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "../catrens-download/KATRENY--2019.pdf";
                    });
            } else if (qa.type === "скачать катрены за 2020 год") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "../catrens-download/KATRENY--2020.pdf";
                    });
            } else if (qa.type === "скачать катрены за 2021 год") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "../catrens-download/KATRENY--2021.pdf";
                    });
            } else if (qa.type === "скачать катрены за 2022 год") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "../catrens-download/KATRENY--2022.pdf";
                    });
            } else if (qa.type === "скачать катрены за 2023 год") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "../catrens-download/KATRENY--2023.pdf";
                    });
            } else if (qa.type === "скачать Доктрину") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "../other-downloads/doktrina-sozdatelya.pdf";
                    });
            } else if (qa.type === "скачать Святую Русь") {
                // Слушаем событие завершения воспроизведения аудио
                audio.addEventListener('ended', function() {
                    // Замените на фактическую ссылку
                    window.location.href = "../other-downloads/Svyataya-Rus.pdf";
                    });
            }
        }
        

        

        recognition.stop();
        setTimeout(function() {
            buttonAndromedaActive = false; // По истечении 3 секунд выключаем кнопку обратно
            updateAndromedaButtonState();
        }, 4000);
    }

    recognition.start();
    setTimeout(function() {
        buttonAndromedaActive = false; // По истечении 3 секунд выключаем кнопку обратно
        updateAndromedaButtonState();
    }, 4000);
    
}

function getQaByQuestion(question) {
    for (const pair of qaPairs) {
        for (const q of pair.questions) {
            if (question.toLowerCase().includes(q.toLowerCase())) {
                if (pair.getDateLink) {
                    const link = pair.getDateLink(question);
                    if (link) {
                        return { ...pair, link }; // Возвращаем объект с добавленной ссылкой на катрен за указанную дату
                    }
                }
                return pair;
            }
        }
    }
    return { questions: [], answer: "Извините, я не поняла вас.", type: "стандартный" };
}
       


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        // Добавляем символ треугольника, смотрящего вверх, в текст кнопки
        button.textContent += ' ▲'; 
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('active');
            if (content.style.display === 'block') {
                content.style.display = 'none';
                button.style.color = 'white'; // Устанавливаем белый цвет текста при свернутом состоянии
                // Удаляем символ треугольника, смотрящего вниз
                button.textContent = button.textContent.replace(' ▼', '');
                // Добавляем символ треугольника, смотрящего вверх
                if (!button.textContent.includes('▲')) {
                    button.textContent += ' ▲'; 
                }
            } else {
                content.style.display = 'block';
                button.style.color = 'gold'; // Устанавливаем золотой цвет текста при развернутом состоянии
                // Удаляем символ треугольника, смотрящего вверх
                button.textContent = button.textContent.replace(' ▲', '');
                // Добавляем символ треугольника, смотрящего вниз
                if (!button.textContent.includes('▼')) {
                    button.textContent += ' ▼'; 
                }
            }
        });
    });
});



