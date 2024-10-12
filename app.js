let son = +prompt("Son kiriting (0-99)");

function sonSozlarda(son) {
    let birlar = [
        ``,
        `bir`,
        `ikki`,
        `uch`,
        `to'rt`,
        `besh`,
        `olti`,
        `yetti`,
        `sakkiz`,
        `to'qqiz`,
    ];
    let onlar = [
        ``,
        `o'n`,
        `yigirma`,
        `o'ttiz`,
        `qirq`,
        `ellik`,
        "oltmish",
        `yetmish`,
        `sakson`,
        `to'qson`,
    ];
    if (son < 0 || son > 99) {
        return "Iltimos 1 dan 99 gacha son kiriting";
    } else if (son === 0) {
        return "nol";
    } else if (son < 10) {
        return birlar[son];
    } else {
        let onlik = Math.floor(son / 10);
        let birlik = son % 10;
        return onlar[onlik] + (" " + birlar[birlik]);
    }
}
console.log(`${sonSozlarda(son)}`);