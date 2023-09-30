import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/Components/Navbar";
import LocationState from "@/Context/LocationState";
import JourneyContext from "@/Context/JourneyState";

export const metadata: Metadata = {
  title: "PSYTAXI - Psychedelic Taxi",
  description:
    "The Best Taxi Booking App in the world with Affordable Price and Best Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <JourneyContext>
      <LocationState>
        <ClerkProvider>
          <html lang="en">
            <body>
              <Navbar />
              {children}
            </body>
          </html>
        </ClerkProvider>
      </LocationState>
    </JourneyContext>
  );
}
