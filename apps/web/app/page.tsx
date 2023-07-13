"use client";

import { Button } from "@dnd9-10/webui";
import { getTest } from "@dnd9-10/shared";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button onClick={() => console.log("Pressed!")} text="Boop" />
      <div>{getTest()}</div>
    </div>
  );
}
