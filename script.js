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
    } else if(language === 'kz'){
        document.getElementById('title').textContent = 'Профиль Рахатов Ерасыл 10\'С';
        document.getElementById('description').textContent = 'Сәлем, менің атым Ерасыл, мен 16 жастамын және менің профильме қош келіңіз.';
        document.getElementById('name').textContent = 'Аты';
        document.getElementById('age').textContent = 'Жасы';
        document.getElementById('email').textContent = 'Электронды почта';
        document.getElementById('name-value').textContent = 'Ерасыл';
        document.getElementById('age-value').textContent = '16';
        document.getElementById('email-value').textContent = 'rahatoverasyl7@gmail.com';
        document.getElementById('hardworking').textContent = 'Еңбекқор';
        document.getElementById('punctual').textContent = 'Пунктуалды';
        document.getElementById('disciplined').textContent = 'Тәрбиелі';
        document.getElementById('ambivert').textContent = 'Амбиверт';
    }
}
