import { connectToDatabase } from "../../lib/db";
import { ObjectId } from "mongodb"

export async function get(request) {
    try {
        const completed = request.query.get("completed") === "true";
        const dbConnection = await connectToDatabase();
        const db = dbConnection.db;
        const collection = db.collection("test");

        const todos = await collection.find({ completed }).toArray()

        return {
            status: 200,
            body: {
                todos
            }
        }
    } catch (err) {
        return {
            status: 500,
            body: {
                error: "Error"
            }
        }
    }

}

export async function post(request) {
    try {
        const dbConnection = await connectToDatabase();
        const db = dbConnection.db;
        const collection = db.collection("test");
        const todo = JSON.parse(request.body);
        await collection.insertOne(todo);

        return {
            status: 200,
            body: {
                status: "Success"
            }
        }
    } catch (err) {
        return {
            status: 500,
            body: {
                error: "Error"
            }
        }
    }
}

export async function put(request) {

}

export async function del(request) {

}