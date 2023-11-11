import UserModel from "@/models/UserModel";
import { connectToDatabase } from "@/utils/database";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(req) {
    const {email, password } = await req.json();
    await connectToDatabase();

    const userExists = await UserModel.findOne({ email });

    if (userExists) {
        return new NextResponse("Email already exists", { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new UserModel({
        email,
        password: hashedPassword
    })

    try {
        await newUser.save();
        return new NextResponse("User successfully created", { status: 200 })
    } catch(err) {
        return new NextResponse(err, {
            status: 500
        })
    }
}