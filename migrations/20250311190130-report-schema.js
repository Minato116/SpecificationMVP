module.exports = {
  async up(db, client) {
    await db.createCollection("reports", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["fullName", "email", "gender"], // Define required fields
          properties: {
            fullName: { bsonType: "string" }, // Full name of the user
            email: { bsonType: "string" }, // Email field
            gender: { bsonType: "string" }, // Gender field
            education: { bsonType: "string" }, // Education details
            employmentDetails: { bsonType: "string" }, // Employment details
            answers: {
              bsonType: "object",
              properties: {
                question: { bsonType: "string" },
                yourAnswer: { bsonType: "string" },
                correctAnswer: { bsonType: "string" }
              }
            },
            type: { bsonType: "string" } // Type of report
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
