migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xogmnmwp6svtauu")

  // remove
  collection.schema.removeField("pmgvaiod")

  // remove
  collection.schema.removeField("dm35ci2z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lsow1kph",
    "name": "end_time",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "frk6vgch",
    "name": "start_time",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xogmnmwp6svtauu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pmgvaiod",
    "name": "start_time",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dm35ci2z",
    "name": "end_time",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("lsow1kph")

  // remove
  collection.schema.removeField("frk6vgch")

  return dao.saveCollection(collection)
})
