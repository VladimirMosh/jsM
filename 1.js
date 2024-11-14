console.log(`Задание №1`);

const musicCollection = {
    musicAlbums: [
        { title: "1-Й Альбом", artist: "Ласковый май", year: 1996 },
        { title: "Авария против!", artist: "Дискотека Авария", year: 2000 },
        { title: "Бутырка. Альбом Третий альбом", artist: "Бутырка", year: 2004 },
    ],
    [Symbol.iterator]() {
        this.index = 0;
        return this;
    },
    next() {
        return this.index < this.musicAlbums.length
            ? { done: false, value: this.musicAlbums[this.index++] }
            : { done: true };
    },
};
for (const album of musicCollection) {
    console.log( `Альбом "${album.title}" исполнителя ${album.artist} выпущен в ${album.year} году` );
}

console.log();
console.log(`Задание №2`);

let cooks = new Map();
cooks.set("Виктор", "Пицца мейкер").set("Ольга", "Сушист").set("Дмитрий", "Кондитер");

console.log(`Виктор - специализация: ${cooks.get("Виктор")}`);
console.log(`Ольга - специализация: ${cooks.get("Ольга")}`);
console.log(`Дмитрий - специализация: ${cooks.get("Дмитрий")}`);
console.log();

let dishes = new Map();
dishes
    .set("Пицца 'Маргарита'", "Виктор")
    .set("Пицца 'Пепперони'", "Виктор")
    .set("Суши 'Филадельфия'", "Ольга")
    .set("Суши 'Калифорния'", "Ольга")
    .set("Тирамису", "Дмитрий")
    .set("Чизкейк", "Дмитрий");

console.log(`Пиццу 'Маргарита' приготовил повар: ${dishes.get("Пицца 'Маргарита'")}`);
console.log(`Суши 'Калифорния' приготовил повар: ${dishes.get("Суши 'Калифорния'")}`);
console.log(`Чизкейк приготовил повар: ${dishes.get("Чизкейк")}`);
console.log();

let orders = new Map(); 

let client1 = { name: "Алексей" };
let clientOrder1 = new Set();
clientOrder1.add("Пицца 'Пепперони'").add("Тирамису");

let client2 = { name: "Мария" };
let clientOrder2 = new Set();
clientOrder2.add("Суши 'Калифорния'").add("Пицца 'Маргарита'");

let client3 = { name: "Ирина" };
let clientOrder3 = new Set();
clientOrder3.add("Чизкейк");

orders
    .set(client1, clientOrder1) 
    .set(client2, clientOrder2)
    .set(client3, clientOrder3);

console.log(
    `Клиент ${client1.name} заказал: ${[...orders.get(client1)]
        .join(" и ")
        .split(",")}`
);
console.log(
    `Клиент ${client2.name} заказал: ${[...orders.get(client2)]
        .join(" и ")
        .split(",")}`
);
console.log(
    `Клиент ${client3.name} заказал: ${[...orders.get(client3)]
        .join(" и ")
        .split(",")}`
);

