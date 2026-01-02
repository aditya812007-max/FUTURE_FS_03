import dbConnect from '@/lib/db';
import Train from '@/models/Train';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();

    
    await Train.deleteMany({});

    
    const trains = [
      {
        trainNumber: "12431",
        name: "Rajdhani Express",
        source: "New Delhi",
        destination: "Mumbai Central",
        price: 2450,
        departureTime: "16:55",
        seatsAvailable: 45
      },
      {
        trainNumber: "22222",
        name: "CSMT Rajdhani",
        source: "Mumbai Central",
        destination: "New Delhi",
        price: 2200,
        departureTime: "17:15",
        seatsAvailable: 120
      },
      {
        trainNumber: "12002",
        name: "Bhopal Shatabdi",
        source: "New Delhi",
        destination: "Bhopal",
        price: 1300,
        departureTime: "06:00",
        seatsAvailable: 80
      },
      {
        trainNumber: "22436",
        name: "Vande Bharat",
        source: "New Delhi",
        destination: "Varanasi",
        price: 1850,
        departureTime: "15:00",
        seatsAvailable: 15
      }
    ];

    await Train.insertMany(trains);

    return NextResponse.json({ message: "Database Seeded Successfully! 🚀", trains });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}