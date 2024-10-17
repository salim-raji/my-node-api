module.exports = {
  async up(db, client) {
    module.exports = {
      async up(db, client) {
        const users = [
          { name: 'Alice', email: 'alice@example.com', imageUrl: null },
          { name: 'Bob', email: 'bob@example.com', imageUrl: null },
          { name: 'Charlie', email: 'charlie@example.com', imageUrl: null },
          { name: 'Diana', email: 'diana@example.com', imageUrl: null },
        ];
    
        await db.collection('users').insertMany(users);
      },
      
      async down(db, client) {
        const emails = [
          'alice@example.com',
          'bob@example.com',
          'charlie@example.com',
          'diana@example.com',
        ];
    
        await db.collection('users').deleteMany({ email: { $in: emails } });
      },
    };
    
  },


};
