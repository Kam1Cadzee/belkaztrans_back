module.exports = {
  async up(db, client) {
    db.collection('categories')
      .insertMany([
        {
          title: '2021',
        },
        {
          title: '2020',
        },
        {
          title: '2019',
        },
      ]);
  },

  async down(db, client) {
    await db.collection('categories').drop();
  }
};
