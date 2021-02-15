module.exports = {
  async up(db, client) {
    const data = [];
    for(let i = 1; i <= 20; i++) {
      const d = new Date();
      d.setFullYear(d.getFullYear() - (i % 3));

      data.push({
        titleEN: 'EN' + i,
        titleRU: 'RU' + i,
        titleUA: 'UA' + i,
        textEN: 'EN' + i,
        textRU: 'RU' + i,
        textUA: 'UA' + i,
        date: d,
      })
    }
    db.collection('news')
      .insertMany(data);
    },

  async down(db, client) {
    await db.collection('news').drop();
  }
};
