import { NextRequest, NextResponse } from "next/server";

export async function PUT(req, context) {
    let User = await req.json();
    const id = context.params.id;
    const response = await fetch(`http://localhost:8081/v1/test/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'x-api-key': 'pIFmUW8YJw9HFk9Z4R1wA7fEbNjYc7EUaRLFopZ0'
        },
        body: JSON.stringify(User),
    });
    const data = await response.json();
    return NextResponse.json(data);
}
