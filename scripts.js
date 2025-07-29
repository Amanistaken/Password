function generateRandom(length){
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmop1234567890!@#$%^&*()_+';
    let password = '';
    for(let i = 0; i < length; i++)
        password += character.charAt(Math.floor(Math.random() * character.length));
    return password;
}

const generate = document.querySelector('.random');
const input = document.querySelector('.input');


const pass = generate.addEventListener('click',()=>{
    const pass = generateRandom(15);
    input.value = pass;
});
