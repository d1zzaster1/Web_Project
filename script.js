function changeLanguage(language) {
    if (language === 'en'){
        document.getElementById('title').textContent = 'Profile of Rakhatov Yerassyl 10"C"';
        document.getElementById('description').textContent = 'Hi, my name is Yerassyl and I\'m 16 years old and welcome to my profile.';
        document.getElementById('name').textContent = 'Name';
        document.getElementById('age').textContent = 'Age';
        document.getElementById('email').textContent = 'Email';
        document.getElementById('name-value').textContent = 'Yerassyl';
        document.getElementById('age-value').textContent = '16';
        document.getElementById('email-value').textContent = 'rahatoverasyl7@gmail.com';
        document.getElementById('hardworking').textContent = 'Hard-working';
        document.getElementById('punctual').textContent = 'Punctual';
        document.getElementById('disciplined').textContent = 'Disciplined';
        document.getElementById('ambivert').textContent = 'Ambivert';
    } else if(language === 'ru'){
        document.getElementById('title').textContent = 'Профиль Рахатова Ерасыля 10\'С';
        document.getElementById('description').textContent = 'Привет, меня зовут Ерасыля, мне 16 лет и добро пожаловать на мой профиль.';
        document.getElementById('name').textContent = 'Имя';
        document.getElementById('age').textContent = 'Возраст';
        document.getElementById('email').textContent = 'Электронная почта';
        document.getElementById('name-value').textContent = 'Ерасыля';
        document.getElementById('age-value').textContent = '16';
        document.getElementById('email-value').textContent = 'rahatoverasyl7@gmail.com';
        document.getElementById('hardworking').textContent = 'Трудолюбивый';
        document.getElementById('punctual').textContent = 'Пунктуальный';
        document.getElementById('disciplined').textContent = 'Дисциплинированный';
        document.getElementById('ambivert').textContent = 'Амбиверт';
    }
}
