import dbConnect from '@/lib/db';
import Train from '@/models/Train';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const source = searchParams.get('source');
    const destination = searchParams.get('destination');

    let query = {};
    
    
    if (source) {
      query.source = { $regex: source, $options: 'i' }; 
    }
    if (destination) {
      query.destination = { $regex: destination, $options: 'i' };
    }

    
    const trains = await Train.find(query);

    return NextResponse.json({ success: true, trains });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}