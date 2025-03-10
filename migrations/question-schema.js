module.exports = {
  async up(db, client) {
    await db.createCollection("questions", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["question", "answer","id", "content", "type", "reason", "question_type"], // Define required fields
          properties: {
            id: { bsonType: "int" }, // Define ID field type
            question: { bsonType: "string" }, // Define question field type
            content: { bsonType: "object" }, // JSON content as object
            answer: { bsonType: "string" }, // Answer field
            type: { bsonType: "string" }, // Type of question (e.g., multiple choice, short answer)
            reason: { bsonType: "string" }, // Reason for the question or answer
            question_type: { bsonType: "int" }, // Define question type (e.g., 1 for multiple choice, 2 for short answer)
          }
        }
      }
    });

    console.log("✅ Migration UP: Created 'questions' collection with required fields and schema.");
  },

  async down(db, client) {
    await db.collection("questions").drop();
    console.log("⏪ Migration DOWN: Dropped 'questions' collection.");
  }
};
