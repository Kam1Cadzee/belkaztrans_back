module.exports = {
  async up(db, client) {
      await db.collection('products')
        .insertMany([
          {
            "titleEN": "1",
            "titleRU": "1",
            "titleUA": "1",
            "code": "aaa",
            "fuels": [
            ]
          },
          {
            "titleEN": "1",
            "titleRU": "1",
            "titleUA": "1",
            "code": "bbb",
            "fuels": [
              {
                "titleEN": "1",
                "titleRU": "1",
                "titleUA": "1",
                "price": 123,
                "shortTitleEN": "string",
                "shortTitleUA": "string",
                "shortTitleRU": "string",

                "descriptionEN": "string",
                "descriptionUA": "string",
                "descriptionRU": "string"
              }
            ]
          },
          {
            "titleEN": "1",
            "titleRU": "1",
            "titleUA": "1",
            "code": "ccc",
            "fuels": [
              {
                "titleEN": "1",
                "titleRU": "1",
                "titleUA": "1",
                "price": 123,
                "shortTitleEN": "string",
                "shortTitleUA": "string",
                "shortTitleRU": "string",

                "descriptionEN": "string",
                "descriptionUA": "string",
                "descriptionRU": "string"
              }
            ]
          }
        ])
    },

  async down(db, client) {
    await db.collection('products')
      .deleteOne({
        code: "aaa"
      });
    await db.collection('products')
      .deleteOne({
        code: "bbb"
      });
    await db.collection('products')
      .deleteOne({
        code: "ccc"
      });
  }
};
