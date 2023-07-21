"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f6b683e3-39e0-4338-ab51-5701cfec5472");
  }, []);

  return null;
};
