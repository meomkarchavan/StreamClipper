migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xogmnmwp6svtauu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x8y8bzjl",
    "name": "tags",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "5fv81dw0u19rh9a",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "29jpbehc",
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
  const collection = dao.findCollectionByNameOrId("xogmnmwp6svtauu")

  // remove
  collection.schema.removeField("x8y8bzjl")

  // remove
  collection.schema.removeField("29jpbehc")

  return dao.saveCollection(collection)
})
