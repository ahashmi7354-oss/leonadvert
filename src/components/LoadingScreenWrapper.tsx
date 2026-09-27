"use client";

import dynamic from "next/dynamic";

// Load only on client — never server-render the splash screen
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});

export default function LoadingScreenWrapper() {
  return <LoadingScreen />;
}
