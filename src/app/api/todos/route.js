import { NextResponse } from "next/server";
import Database from "@/lib/Database";
import Todo from "@/models/Todo";
import TodoValidator from "@/validator/Todo"

export async function GET() {
    await Database;
    const data = await Todo.find({})
    return NextResponse.json({ data })
}


export async function POST(req, res) {
    try {
        await Database;
        const body = await req.json()
        const data = new Todo(body);

        const validate = await TodoValidator.safeParse(data)

        if (validate.success == false) {
            return NextResponse.json(validate.error)
        }

        const result = await data.save();
        console.log(result)
        return NextResponse.json({ result })
    }
    catch {
        return NextResponse.json({ message: "Internal Server Error" })
    }
}
