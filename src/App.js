import "./App.css";
import Signature from "./components/Signature";
import { Upload } from "./components/Upload";
import Viewer from "./components/Viewer";
import { useState } from "react";
import Download from "./components/DownloadFile";

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [signatureUrl, setSignatureUrl] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pdfDimensions, setPdfDimensions] = useState({ width: 0, height: 0 });
  const handleFileUpload = (fileUrl) => {
    setPdfFile(fileUrl);
  };
  const handleSignatureSave = (signature) => {
    setSignatureUrl(signature);
  };

  const handleDrag = (e, data) => {
    e.preventDefault();
    setPosition({ x: data.x, y: data.y });
  };
  console.log(position);
  return (
    <div className="App ">
      <Upload onFileUpload={handleFileUpload} />
      {pdfFile && (
        <Viewer
          file={pdfFile}
          signatureUrl={signatureUrl}
          position={position}
          onDrag={handleDrag}
          pdfDimensions={pdfDimensions}
        />
      )}

      <Signature onSave={handleSignatureSave} />

      {pdfFile && signatureUrl && (
        <Download
          file={pdfFile}
          signatureUrl={signatureUrl}
          position={position}
          pdfDimensions={pdfDimensions}
        />
      )}
    </div>
  );
}

export default App;
