import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const searchedText = searchParams.get("q");
  const data = await fetch(`https://api.mapbox.com/search/searchbox/v1/suggest?q=${searchedText}&language=en&country=IN&access_token=${process.env.MAPBOX_API_SESSION_TOKEN}&session_token=${process.env.UUID_NUMBER}`,{
    headers: {
      "Content-Type": "application/json",
    },
  });
  const searchResults = await data.json();
  console.log(searchResults);
  return NextResponse.json({ searchResults });
}
