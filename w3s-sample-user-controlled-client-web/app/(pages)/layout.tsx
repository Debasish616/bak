import "../globals.css";
import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ClientProviders, Footer } from "@/app/components"; // Ensure ClientProviders is imported correctly
import { Button, Typography } from "@mui/joy"; // MUI Joy components for styling
import { BookOpenIcon } from "@heroicons/react/16/solid";

const inter = Inter({
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="__next">
          <ClientProviders>
            <div
              className="gradient-background"
              style={{
                background: "linear-gradient(135deg, #0f172a, #1e293b, #334155)",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffffff",
              }}
            >
              {/* Navbar */}
              <nav
                style={{
                  width: "100%",
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#1e293b",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                }}
              >
                {/* Logo */}
                <div>
                  <Image
                    src={`/CircleLogoWithName.svg`}
                    alt="Circle Logo"
                    width={140}
                    height={36}
                  />
                </div>

                {/* Navigation Buttons */}
                <div style={{ display: "flex", gap: "1rem" }}>
                  <a href="../">
                  <Button
                    variant="outlined"
                    color="neutral"
                    style={{
                      borderColor: "#ffffff",
                      color: "#ffffff",
                    }} 
                  > Home
                    </Button> 
                  </a>
                  <a href="/signin">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{
                      borderColor: "#ffffff",
                      color: "#ffffff",
                    }}
                  >
                    Login
                  </Button>
                  </a>
                  <a href="/signup">
                  <Button
                    variant="outlined"
                    color="success"
                    style={{
                      borderColor: "#ffffff",
                      color: "#ffffff",
                    }}
                  >
                    Sign Up
                  </Button>
                  </a>
                </div>
              </nav>

              {/* Main Content */}
              <div
                className="container"
                style={{
                  maxWidth: "1280px",
                  width: "100%",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  justifyContent: "center", // Center content vertically
                  alignItems: "center",      // Center content horizontally
                }}
              >
                {/* Logo Section */}
                <div
                  className="logo-section"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    level="title-lg"
                    style={{
                      marginTop: "1rem",
                      fontSize: "1.5rem",
                      color: "#e5e7eb",
                    }}
                  >
                    CeleriZ
                  </Typography>
                </div>

                {/* Main App Container */}
                <AppContainer>{children}</AppContainer>

              </div>

              {/* Footer */}
              <Footer />
            </div>
          </ClientProviders>
        </div>
      </body>
    </html>
  );
}

// App Container Component for styling the content box
const AppContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    className="app-container"
    style={{
      width: "100%",
      maxWidth: "400px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "0.5rem",
      backgroundColor: "#1e293b",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      marginBottom: "2rem",
      justifyContent: "center",  // Vertically center the content inside the card
      alignItems: "center",      // Horizontally center the content inside the card
      padding: "1rem",           // Add some padding to the inside of the card
    }}
  >
    {children}
  </div>
);

export const metadata: Metadata = {
  title: "Programmable Wallet SDK Web Sample App",
  description: "An example of how to use Circle's Programmable Wallet SDK",
};
