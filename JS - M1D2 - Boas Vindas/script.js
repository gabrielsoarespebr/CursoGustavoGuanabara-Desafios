function registro() {
    let name = prompt("Seu nome:");
    let age = prompt("Sua idade:");
    if (age >= 18)
    {
        alert(`Bem-vindo(a), ${name}!`);
    }
    else alert(`${name}, você tem apenas ${age} anos. Menores de idade não podem acessar o site.`);
}