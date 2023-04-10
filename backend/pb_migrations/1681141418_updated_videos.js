migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftw07gttaho0v2n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9stjmkrq",
    "name": "category",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "1ox9umzrwakidwb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftw07gttaho0v2n")

  // remove
  collection.schema.removeField("9stjmkrq")

  return dao.saveCollection(collection)
})
