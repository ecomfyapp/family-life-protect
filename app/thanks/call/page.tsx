import { Suspense } from "react";
import ThanksCallClient from "./thanks-call-client";
import VercelThankYouTracker from "../vercel-thank-you-tracker";

export default function ThanksCallPage() {
  return (
    <Suspense fallback={null}>
      <VercelThankYouTracker thankYouType="call" />
      <ThanksCallClient />
    </Suspense>
  );
}
