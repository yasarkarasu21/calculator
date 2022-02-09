var _buttons = document.querySelectorAll("button"),
    _buttonsCount = _buttons.length,
    _calculatortext = document.querySelector("#calculatortext"),
    sayi = 0;

for (sayi = 0; sayi < _buttonsCount; sayi++) {
    _buttons[sayi].onclick = hesap;
}

function hesap() {
    var _currentValue = this.innerHTML;

    if (_currentValue == "=") {
        try {
            _calculatortext.value = eval(_calculatortext.value);
        } catch (e) {
            _calculatortext.value = 0;
        }
        return;
    }

    _calculatortext.value += _currentValue;
}

function temizle() {

    var _currentValue = this.innerHTML;

    if (_currentValue == "C") {
        try {
            _calculatortext.value = eval(_calculatortext.value);
        } catch (e) {
            
        }
        return;
    }

    _calculatortext.value += _currentValue;
}