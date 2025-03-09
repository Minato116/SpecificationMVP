module.exports = {
  async up(db, client) {
    // Add your new schema changes here. For example:
    await db.createCollection('projects', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["project", "achievements", "steps", "risks", "status"],
          properties: {
            project: {
              bsonType: "string",
            },
            achievements: {
              bsonType: "string",
            },
            steps: {
              bsonType: "string",
            },
            risks: {
              bsonType: "string",
            },
            status: {
              bsonType: "string",
            },
            projectDetails: {
              bsonType: "object",
              properties: {
                projectDescription: {
                  bsonType: "string",
                },
                engagementType: {
                  bsonType: "string",
                },
                deliveryModel: {
                  bsonType: "string",
                },
                projectDuration: {
                  bsonType: "string",
                },
                sprintStartDate: {
                  bsonType: "date",
                },
                sprintEndDate: {
                  bsonType: "date",
                },
                teamSize: {
                  bsonType: "int",
                },
              },
            },
            projectDetail2: {
              bsonType: "object",
              properties: {
                customerSponsor: {
                  bsonType: "string",
                },
                PM: {
                  bsonType: "string",
                },
                technology: {
                  bsonType: "string",
                },
                scrumTeam: {
                  bsonType: "string",
                },
                sow: {
                  bsonType: "object",
                  properties: {
                    cbs: {
                      bsonType: "string",
                    },
                    startDate: {
                      bsonType: "date",
                    },
                    endDate: {
                      bsonType: "date",
                    },
                    signed: {
                      bsonType: "string",
                    },
                    reminder: {
                      bsonType: "string",
                    },
                  },
                },
              },
            },
            accomplishments: {
              bsonType: "object",
              properties: {
                currentStatus: {
                  bsonType: "string",
                },
                plan: {
                  bsonType: "string",
                },
              },
            },
            type: {
              bsonType: "object",
              properties: {
                type: {
                  bsonType: "string",
                },
                description: {
                  bsonType: "string",
                },
                impact: {
                  bsonType: "string",
                },
                mitigation: {
                  bsonType: "string",
                },
                owner: {
                  bsonType: "string",
                },
                dueDate: {
                  bsonType: "date",
                },
              },
            },
            metrics: {
              bsonType: "object",
              properties: {
                ratio: {
                  bsonType: "object",
                  properties: {
                    av: {
                      bsonType: "string",
                    },
                    status: {
                      bsonType: "string",
                    },
                    comments: {
                      bsonType: "string",
                    },
                  },
                },
                velocity: {
                  bsonType: "object",
                  properties: {
                    av: {
                      bsonType: "string",
                    },
                    status: {
                      bsonType: "string",
                    },
                    comments: {
                      bsonType: "string",
                    },
                  },
                },
                codeSmell: {
                  bsonType: "object",
                  properties: {
                    av: {
                      bsonType: "string",
                    },
                    status: {
                      bsonType: "string",
                    },
                    comments: {
                      bsonType: "string",
                    },
                  },
                },
                ut: {
                  bsonType: "object",
                  properties: {
                    av: {
                      bsonType: "string",
                    },
                    status: {
                      bsonType: "string",
                    },
                    comments: {
                      bsonType: "string",
                    },
                  },
                },
                defect: {
                  bsonType: "object",
                  properties: {
                    av: {
                      bsonType: "string",
                    },
                    status: {
                      bsonType: "string",
                    },
                    comments: {
                      bsonType: "string",
                    },
                  },
                },
                test: {
                  bsonType: "object",
                  properties: {
                    av: {
                      bsonType: "string",
                    },
                    status: {
                      bsonType: "string",
                    },
                    comments: {
                      bsonType: "string",
                    },
                  },
                },
                schedule: {
                  bsonType: "object",
                  properties: {
                    av: {
                      bsonType: "string",
                    },
                    status: {
                      bsonType: "string",
                    },
                    comments: {
                      bsonType: "string",
                    },
                  },
                },
              },
            },
            milestones: {
              bsonType: "object",
              properties: {
                key: {
                  bsonType: "string",
                },
                date: {
                  bsonType: "date",
                },
                status: {
                  bsonType: "string",
                },
              },
            },
          },
        },
      },
    });
  },

  async down(db, client) {
    // Drop the collection if the migration is rolled back
    await db.collection('projects').drop();
  },
};
