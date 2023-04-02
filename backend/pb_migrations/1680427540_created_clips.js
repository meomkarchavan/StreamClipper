migrate((db) => {
  const collection = new Collection({
    "id": "wmfmb1yiqckpk9g",
    "created": "2023-04-02 09:25:40.468Z",
    "updated": "2023-04-02 09:25:40.468Z",
    "name": "clips",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yr3w7mn0",
        "name": "startTime",
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
        "id": "6zncatjy",
        "name": "endTime",
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
        "id": "xptu3ukw",
        "name": "tags",
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
        "id": "3zhk4m2v",
        "name": "youtubeUrl",
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
        "id": "ewdisest",
        "name": "title",
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
  const collection = dao.findCollectionByNameOrId("wmfmb1yiqckpk9g");

  return dao.deleteCollection(collection);
})
