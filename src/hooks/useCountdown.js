import { useEffect, useState } from "react";

function splitRemaining(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds, remainingMs: Math.max(0, ms) };
}

export default function useCountdown(deadlineMs) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!Number.isFinite(deadlineMs)) return undefined;
    if (Date.now() >= deadlineMs) return undefined;

    const id = window.setInterval(() => {
      const current = Date.now();
      setNow(current);
      if (current >= deadlineMs) window.clearInterval(id);
    }, 1000);

    return () => window.clearInterval(id);
  }, [deadlineMs]);

  const expired = !Number.isFinite(deadlineMs) || now >= deadlineMs;
  return { expired, ...splitRemaining(deadlineMs - now) };
}
