module.exports = {
  async up(db, client) {
    await db.createCollection("users", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: [
            "firstName",
            "lastName",
            "email",
            "password",
            "gender",
            "dateOfBirth",
            "preferredLanguage",
            "employmentDetails",
            "dateOfJoining",
            "keySkills",
            "education",
            "certifications"
          ],
          properties: {
            firstName: { bsonType: "string" },
            middleName: { bsonType: "string" },
            lastName: { bsonType: "string" },
            email: { bsonType: "string" },
            password: { bsonType: "string" },
            gender: { bsonType: "string" },
            dateOfBirth: { bsonType: "date" },
            preferredLanguage: { bsonType: "string" },
            employmentDetails: { bsonType: "string" },
            dateOfJoining: { bsonType: "date" },
            keySkills: { bsonType: "string" },
            education: { bsonType: "string" },
            certifications: { bsonType: "string" },
            isAdmin: { bsonType: "bool" },
            createdAt: { bsonType: "date" },
            updatedAt: { bsonType: "date" }
          }
        }
      }
    });

    console.log("✅ Migration UP: Created 'users' collection with required fields and schema.");
  },

  async down(db, client) {
    await db.collection("users").drop();
    console.log("⏪ Migration DOWN: Dropped 'users' collection.");
  }
};
