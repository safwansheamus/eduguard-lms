const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Cybersecurity" },
        { name: "Ethical Hacker" },
        { name: "Computer Science" },
        { name: "Enginering" },
        { name: "Digital Designer" },
        { name: "Video Editor" },
        { name: "Photo Editor" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();



