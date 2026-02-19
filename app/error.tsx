"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error.message, error.stack);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
      <h2 className="text-xl font-semibold text-primary">Qualcosa non ha funzionato</h2>
      <p className="text-center text-body-color">
        {error.message || "Si è verificato un errore."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
      >
        Riprova
      </button>
    </div>
  );
}
