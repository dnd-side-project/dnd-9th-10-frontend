"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { Topbar } from "@dnd9-10/webui/src/topbar/Topbar";

import styles from "./page.module.css";

export default function Page() {
  const router = useRouter();
  const handleBackOrHome = useCallback(
    (e: React.MouseEvent) => {
      router.replace("/");
    },
    [router]
  );

  return (
    <div className={styles.wrap}>
      <Topbar title="test" onBackClick={handleBackOrHome} />
    </div>
  );
}
