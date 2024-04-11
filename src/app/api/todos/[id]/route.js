import { NextResponse } from "next/server";
import Database from "@/lib/Database";
import Todo from "@/models/Todo";

export async function GET(req, { params }) {
    await Database;
    const id = params.id;
    const data = await Todo.findOne({}).where({ _id: id })
    return NextResponse.json({ data })
}
