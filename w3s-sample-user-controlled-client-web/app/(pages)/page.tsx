// app/page.tsx

import Image from "next/image";
import { Button, Typography } from "@mui/joy";
import { BookOpenIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div
      className="homepage-container"
      style={{
        textAlign: "center",
        padding: "2rem",
        color: "#e5e7eb",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
      }}
    >

      {/* Features Section */}
      <div
        className="features"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "600px",
        }}
      >
        <Typography level="body-lg" style={{ color: "white", lineHeight: "1.5" }}>
          Circle's Programmable Wallet SDK empowers developers to build secure,
          user-controlled wallets with ease. Explore how you can integrate our
          sample app into your projects!
        </Typography>
      </div>

      {/* Action Links */}
      <div
        className="links-section"
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outlined"
            style={{
              color: "#ffffff",
              borderColor: "#ffffff",
              padding: "0.5rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Get Started
          </Button>
        </a>
        <a
          href="signin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outlined"
            style={{
              color: "#ffffff",
              borderColor: "#ffffff",
              padding: "0.5rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Log In
          </Button>
        </a>
      </div>
    </div>
  );
}
