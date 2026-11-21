import { useEffect, useState } from "react";
import Button from "./Button";

export default function HashConfirm({ hash, onConfirm }) {
  const [typed, setTyped] = useState("");

  // A different plan means a different hash: discard what was typed for the old one.
  useEffect(() => {
    setTyped("");
  }, [hash]);

  const isValid = typed === hash;

  return (
    <div className="hash-confirm">
      <label>
        Hash del plan
        <input
          type="text"
          autoComplete="off"
          spellCheck={false}
          value={typed}
          onChange={(event) => setTyped(event.target.value)}
        />
      </label>
      <Button variant="danger" disabled={!isValid} onClick={() => onConfirm()}>
        Aprobar
      </Button>
    </div>
  );
}
