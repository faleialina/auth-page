const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    try {
        let inp = document.querySelector('input');
        if (inp.value === '') throw new Error('Пустая строка')
        if (!/^[a-z0-9_\.-]+@[a-z]+\.[a-z]{2,3}$/gm.test(inp.value)) throw new Error('некорректный ввод');
        if (!/^[\w\+\!\.\@\#\$\%\&\*\(\)\/\\]{8,}$/gm.test(inp.value)) throw new Error('Пароль не соответствует требованиям безопасности');
        return true;
    } catch (error) {
        alert(error.message)
    }

})




