class WardrobeItem {
  constructor (id, categoryId, name, dateAdded, lastWorn, tags, uri) {
    this.id = id;
    this.categoryId = categoryId;
    this.name = name;
    this.dateAdded = dateAdded;
    this.lastWorn = lastWorn;
    this.tags = tags;
    this.uri = uri;
  }
};

export default WardrobeItem;