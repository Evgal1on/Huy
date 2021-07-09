var msg1, msg2, msg3, n1, n2, op
msg1='укажите первое число'
msg2='укажите второе число (пропустите если выбрали sqrt)'
msg3='укажите какую операцию вы бы хотели совершить'
n1=+prompt(msg1)
op=prompt(msg3)
n2=+prompt(msg2)

if(op==='+'){
    alert(n1+n2)
}
else if(op==='-'){
    alert(n1-n2)
}
else if(op==='*'){
    alert(n1*n2)
}
else if(op==='/'){
    alert(n1/n2)
}
else if(op==='sqrt'){
    alert(Math.sqrt(n1))
}
else if(op==='^'){
    alert(Math.pow(n1, n2))
}
else{
    alert('Ошибка: знак или числа не были введены')
}