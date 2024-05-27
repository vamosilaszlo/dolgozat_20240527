function fullStack(frontEnd, backEnd) {
    const frontEndDevs = frontEnd.split(';');
    const backEndDevs = backEnd.split(';');

    const fullStackDevs = frontEndDevs.filter(dev => backEndDevs.includes(dev));

    return fullStackDevs;
}


console.log(fullStack('Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Trab Antal;Koaxk Abel;Winch Eszter'));

console.log(fullStack('Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'));

