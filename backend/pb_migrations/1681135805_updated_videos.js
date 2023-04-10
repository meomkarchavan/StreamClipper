migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftw07gttaho0v2n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gkes01gl",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ftw07gttaho0v2n")

  // remove
  collection.schema.removeField("gkes01gl")

  return dao.saveCollection(collection)
})
