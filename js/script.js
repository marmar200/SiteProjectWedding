document.getElementById('weddingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Собираем данные
    const formData = {
      name: this.fullname.value,
      willGo: this.querySelector('[name="attendance"]:checked')?.value || '',
      alchogol: Array.from(this.querySelectorAll('[name="alcohol"]:checked')).map(el => el.value),
      transfer: this.querySelector('[name="transfer"]:checked')?.value || ''
    };
  
    // Отправка в Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbzB0SmXoZCfDN6FvrsSOlsdXON7m9n50FB0y5GMADu9xNb6VjAPFn1sDQVe2t6zDnOqUw/exec', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(response => alert('Данные успешно отправлены!'))
    .catch(error => alert('Ошибка: ' + error));
  });