import { connectToDatabase } from '@/app/lib/mongoDB';
import prisma from '@/prisma';
import  bcrypt from 'bcrypt';
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
    try {
        const { name, email, password } = await req.json();
        if (!name || !email || !password) {
            return NextResponse.json({ message: "Invalid data" }, { status: 422 });
        }
        await connectToDatabase();

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({ data: { email, name, hashedPassword } });
        return NextResponse.json({ newUser }, { status: 201 });


    } catch (error) {
        console.log("Register_POST:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });

    } finally {
        await prisma.$disconnect();
    }
}
