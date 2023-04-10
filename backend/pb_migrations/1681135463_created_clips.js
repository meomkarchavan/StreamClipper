migrate((db) => {
  const collection = new Collection({
    "id": "xogmnmwp6svtauu",
    "created": "2023-04-10 14:04:23.765Z",
    "updated": "2023-04-10 14:04:23.765Z",
    "name": "clips",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bruyqfju",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "vj939rrh",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xogmnmwp6svtauu");

  return dao.deleteCollection(collection);
})
