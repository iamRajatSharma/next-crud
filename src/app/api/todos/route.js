import { NextResponse } from "next/server";
import Database from "@/lib/Database";
import Todo from "@/models/Todo";
var FormData = require('form-data');

export async function GET() {
    await Database;
    const data = await Todo.find({})
    return NextResponse.json({ data })
}


export async function POST(req, res) {
    await Database;
    // const body = await req.body
    // var form = new FormData();

    // console.log(form)
    // const data = await Todo.find({})
    return NextResponse.json({ msg: "body" })
}


export async function DELETE(req, res) {
    await Database;
    // const body = await req.body
    // var form = new FormData();

    // console.log(form)
    // const data = await Todo.find({})
    return NextResponse.json({ msg: "body" })
}
