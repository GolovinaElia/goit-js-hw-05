class Storage {
  constructor(items) {
    this._items = items;
  }

  getItems() {
    return this._items;
  }

  addItem(item) {
    this._items.push(item);
  }

  removeItem(deletedItem) {
    const newItems = [];

    for (const item of this._items) {
      if (item === deletedItem) continue;

      newItems.push(item);
    }
    this._items = newItems;
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); 

storage.addItem('Дроид');
console.table(storage.getItems()); 

storage.removeItem('Пролонгер');
console.table(storage.getItems()); 