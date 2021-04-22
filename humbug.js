console.log('js_script_init')

let iBool = 1;
let users = ['humbug', 'hum', 'bug',]
let i = 0;




do {
    if (i % 15 === 0) {
        console.log('humbug');
    }
    else if (i % 3 === 0) {
        console.log('hum');
    }
    else if (i % 5 === 0) {
        console.log('bug');
    }
    else {
        console.log(i);
    }
    i++;
}

while (i < 101);


document.write('<ol>');
while (i < users.length) {

    document.write('<li>' + users[i]);
    console.log(users[i]);
    console.log(i);
    i++;


}
document.write('</ol>');


console.log('Calculation Complete.');