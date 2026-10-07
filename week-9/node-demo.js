const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db("collegeDB");

        // Select collction
        const students = db.collection("students");

        const insertResult = await students.insertOne({
            name: "Mahith",
            rollNo: 101,
            branch: "CSE",
            marks: 85
        });

        console.log("Inserted ID:", insertResult.insertedId);

        // ---------------- FIND ----------------
        const student = await students.findOne({ rollNo: 101 });

        console.log("\nStudent found:");
        console.log(student);

        const updateResult = await students.updateOne(
            { rollNo: 101 },
            { $set: { marks: 90 } }
        );

        console.log("\nUpdated documents:", updateResult.modifiedCount);

        const updatedStudent = await students.findOne({ rollNo: 101 });

        console.log("After update:");
        console.log(updatedStudent);

        const deleteResult = await students.deleteOne({
            rollNo: 101
        });

        console.log("\nDeleted documents:", deleteResult.deletedCount);

    } catch (error) {
        console.log("Error:", error);
    } finally {
        await client.close();
        console.log("\nMongoDB connection closed.");
    }
}

main();