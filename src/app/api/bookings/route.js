import dbConnect from '@/lib/db';
import Booking from '@/models/Booking';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await dbConnect();
    
    
    const body = await request.json();
    const { trainId, seats } = body;

    
    const newBooking = await Booking.create({
      trainId,
      seats,
    });

    return NextResponse.json({ success: true, booking: newBooking });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}