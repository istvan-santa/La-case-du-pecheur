import React from "react";
import { Navigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

// This component now only serves to redirect to the new booking page.
export default function BungalowsPageRedirect() {
  return <Navigate to={createPageUrl("Booking")} replace />;
}