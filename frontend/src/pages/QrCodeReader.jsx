import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QrCodeReader = () => {
  const [scannedResult, setScannedResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setScannedResult(data);
    }
  };

  const handleError = (err) => {
    console.error("Scan error:", err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
        facingMode="environment" // Use 'environment' for back camera, 'user' for front camera
      />
      {scannedResult && <p>Scanned data: {scannedResult}</p>}
    </div>
  );
};

export default QrCodeReader;
