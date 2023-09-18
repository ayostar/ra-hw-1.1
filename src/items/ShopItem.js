export default class ShopItem {
  constructor(data) {
    const fields = [
      'brand',
      'title',
      'description',
      'descriptionFull',
      'price',
      'currency',
    ];

    fields.forEach((field) => {
      if (!data.hasOwnProperty(field))
        throw Error(`Не корректно переданный объект, поле: ${field}`);
      this[field] = data[field];
    });
  }
}
