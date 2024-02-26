"use client";

import React from "react";

import styles from "./error.module.css";

export default function IoRootErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const digest: string | undefined = (error as any)?.digest;

  // This is intended
  console.error(error);

  return (
    <div className={styles.container} data-testid="top.error-boundary">
      <h1>Something went wrong!</h1>

      {!!digest && <code>Error code: {digest}</code>}

      <div className={styles.buttons}>
        <button onClick={reset}>Try again</button>
      </div>
    </div>
  );
}
