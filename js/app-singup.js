// Сверстать макет из 2 страниц. Сконнектить ссылками 2 страницы.
// На каждое поле поставить валидацию (пароль не должен быть менее 8 символов,
// регулярные выражения для почты / номера, при регистрации pwd, confirm pwd идентичны).
// После нажатия на кнопку срабатывает валидация. Нсли валидация прошла успешно,
// то вывести alert “Вы успешно зарегистрированы / авторизованы в системе”, в зависимости 
// от страницы. Если проверки не прошли, то вывсти alert с соответствующим сообщением об ошибке

class SingUp {
    constructor() {

        this.doRegistration()

    }

    isValid(mail, pwd, pwdConf) {
        if (mail === '' || pwd === '') throw new Error('Пустая строка')
        if (!/^[a-z0-9_\.-]+@[a-z]+\.[a-z]{2,3}$/gm.test(mail) && !/^\+[1-9]{12}$/gm.test(mail)) throw new Error('некорректный ввод почты / номера телефона');
        if (!/^[\w\+\!\.\@\#\$\%\&\*\(\)\/\\]{8,}$/gm.test(pwd)) throw new Error('Пароль не соответствует требованиям безопасности');
        if (pwdConf !== pwd) throw new Error('Пароль не подтвержден');
    }

    doRegistration() {
        const btn = document.querySelector('button');
        const inp1 = document.querySelector('.inp-mail');
        const inp2 = document.querySelector('.inp-pwd');
        const inp3 = document.querySelector('.inp-pwd-conf');


        btn.addEventListener('click', () => {
            try {
                let mail = inp1.value;
                let pwd = inp2.value;
                let pwdConf = inp3.value;
                this.isValid(mail, pwd, pwdConf)
                alert('Вы успешно зарегистрированы в системе');
                inp1.value = '';
                inp2.value = '';
                inp3.value = '';
            } catch (error) {
                alert(error.message)
            }

        })
    }
}
const singUp = new SingUp();