module.exports = {
  async up(db, client) {
    await db.createCollection("reports", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["answers", "type"], // Define required fields
          properties: {
            answers: {
              bsonType: "object",
              properties: {
                question: { bsonType: "string" }, // Define question field type
                yourAnswer: { bsonType: "string" }, // Define yourAnswer field type
                correctAnswer: { bsonType: "string" }, // Define correctAnswer field type
              }
            },
            type: { bsonType: "string" } // Define type field
          }
        }
      }
    });

    console.log("✅ Migration UP: Created 'reports' collection with required fields and schema.");
  },

  async down(db, client) {
    await db.collection("reports").drop();
    console.log("⏪ Migration DOWN: Dropped 'reports' collection.");
  }
};
