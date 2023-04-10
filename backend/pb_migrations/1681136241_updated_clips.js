migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xogmnmwp6svtauu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k5blbahd",
    "name": "video",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ftw07gttaho0v2n",
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
  collection.schema.removeField("k5blbahd")

  return dao.saveCollection(collection)
})
