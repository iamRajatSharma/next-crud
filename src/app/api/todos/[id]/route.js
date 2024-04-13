import { NextResponse } from "next/server";
import Database from "@/lib/Database";
import Todo from "@/models/Todo";
import TodoValidator from "@/validator/Todo";

export async function GET(req, { params }) {
    await Database;
    const id = params.id;
    const data = await Todo.findOne({}).where({ _id: id })
    return NextResponse.json({ data })
}


export async function PUT(req, { params }) {
    await Database;
    const id = params.id;
    const payload = await req.json();

    const validate = await TodoValidator.safeParse(payload)

    if (validate.success == false) {
        return NextResponse.json(validate.error)
    }

    const result = await Todo.findByIdAndUpdate(id, payload)
    return NextResponse.json({ result })
}


export async function DELETE(req, { params }) {
    await Database;
    const id = params.id;
    const result = await Todo.findByIdAndDelete(id);
    return NextResponse.json({ result })
}
