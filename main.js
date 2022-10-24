let submit = document.getElementById('submit')
let result = document.getElementById('result')
let power = 0

submit.addEventListener('click', () => {
    let number = document.getElementById('num').value
    if (number === "") {
        result.innerText = 'Nic nie zostało wpisane!'
    } else {
        if (number.startsWith('-0x') || number.startsWith('0x')) {
            switch (true) {
                case (number.startsWith('0x')):
                    number = number.slice(2)
                    number = parseInt(number, 16)
                    result.innerText = ('Dodatnia całkowita wartość szesnastkowa równa ' + number + " w systemie dziesiętnym")
                    break; //zadanie 5 (done)

                case (number.startsWith('-0x')):
                    number = number.slice(3)
                    number = parseInt(number, 16)
                    number = number * -1
                    result.innerText = ('Ujemna całkowita wartość szesnastkowa równa ' + number + " w systemie dziesiętnym")
                    break; //zadanie 6 (done)
            }
        } else {
            if (number.includes('E')) {
                switch (true) {
                    case (number.includes('E-')):
                        power = number.split('E')[1]
                        number = number.split('E')[0]
                        power = 10 ** power
                        number = number * power
                        number = number.toString()
                        if (number.includes('.')) {
                            number = number.replace(".", ",");
                            result.innerText = ('Ujemna wartość rzeczywista równa ' + number)
                        } else {
                            result.innerText = ('Ujemna wartość rzeczywista równa ' + number)
                        }
                        break; //zadanie 10 (done)

                    case (number.includes('E')):
                        power = number.split('E')[1]
                        number = number.split('E')[0]
                        power = 10 ** power
                        number = number * power
                        number = number.toString()
                        if (number.includes('.')) {
                            number = number.replace(".", ",");
                            result.innerText = ('Dodatnia wartość rzeczywista równa ' + number)
                        } else {
                            result.innerText = ('Dodatnia wartość rzeczywista równa ' + number)
                        }
                        break; //zadanie 9 (done)
                }
            } else {
                if (!number.includes('.')) {
                    switch (true) {
                        case (number.startsWith('-0')):
                            number = number.slice(2)
                            number = parseInt(number, 8)
                            number = number * 1
                            result.innerText = ('Ujemna całkowita wartość ósemkowa równa ' + number + ' w systemie dziesiętnym')
                            break; //zadanie 4 (done)

                        case (number.startsWith('0')):
                            number = number.slice(1)
                            number = parseInt(number, 8)
                            result.innerText = 'Dodatnia całkowita wartość ósemkowa równa ' + number + ' w systemie dziesiętnym'
                            break; //zadanie 3 (done)

                        case (number.startsWith('-')):
                            result.innerText = ('Ujemna całkowita wartość dziesiętna ' + number)
                            break; //zadanie 2 (done)

                        default:
                            result.innerText = ('Dodatnia całkowita wartość dziesiętna ' + number)
                        //zadanie 1 (done)
                    }
                } else {
                    if (number.startsWith('-')) {
                        number = number.replace(".", ",")
                        result.innerText = ('Ujemna wartość rzeczywista ' + number) //zadanie 8 (done)
                    } else {
                        number = number.replace(".", ",")
                        result.innerText = ('Dodatnia wartość rzeczywista ' + number) //zadanie 7 (done)
                    }
                }
            }
        }
    }
})
