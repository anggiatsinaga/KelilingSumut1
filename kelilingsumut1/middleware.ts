export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Log status maintenance
  console.log("MAINTENANCE status:", process.env.MAINTENANCE);

  // Jika MAINTENANCE=true, redirect ke /maintenance
  if (process.env.MAINTENANCE === "true") {
    return NextResponse.redirect(new URL("/maintenance", req.url));
  }

  return NextResponse.next();
}
