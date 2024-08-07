


// 2nd final code for working
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ModifyPdf from './ModifyPdf'; // Import the modifyPdf function
import PdfSignature from './PdfSignature'; // Import the PdfSignature component

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const PdfViewer = ({ file }) => {
  return (
    <Document className="file"  file={file}>
      <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
    </Document>
  );
};

const PdfUpload = () => {
    // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    //     'pdfjs-dist/build/pdf.worker.min.mjs',
    //     import.meta.url,
    //   ).toString();
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  const [pdfFile, setPdfFile] = useState(null);
  const [modifiedPdf, setModifiedPdf] = useState(null);
  const [signatureUrl, setsignatureUrl] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      setPdfFile(url);

      // Modify the PDF if signature is already provided
      if (signatureUrl) {
        const modifiedPdfBytes = await ModifyPdf(file, signatureUrl);
        const modifiedPdfUrl = URL.createObjectURL(new Blob([modifiedPdfBytes], { type: 'application/pdf' }));
        setModifiedPdf(modifiedPdfUrl);
      }
    }
  };

  const handleSignatureSave = async (signature) => {
    setsignatureUrl(signature);

    if (pdfFile) {
      const response = await fetch(pdfFile);
      const file = await response.blob();
      const modifiedPdfBytes = await ModifyPdf(file, signature);
      const modifiedPdfUrl = URL.createObjectURL(new Blob([modifiedPdfBytes], { type: 'application/pdf' }));
      setModifiedPdf(modifiedPdfUrl);
    }
  };

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = modifiedPdf;
    link.download = 'modified.pdf';
    link.click();
  };

  return (
    <div className="pdf-upload">
      <Button component="label" role={undefined} variant="contained" tabIndex={-1}>
        Upload Your Pdf
        <VisuallyHiddenInput type="file" accept="application/pdf" onChange={handleFileChange} />
      </Button>
      {pdfFile && <PdfViewer file={pdfFile} />}
      <PdfSignature onSave={handleSignatureSave} />
      {modifiedPdf && (
        <div>
          <h3 style={{marginTop:"100px" ,display:"flex" , justifyContent:"center"}}>Modified PDF</h3>
          <PdfViewer file={modifiedPdf} />
          <Button variant="contained" color="primary" onClick={downloadPdf}>
            Download Modified PDF
          </Button>
        </div>
      )}
    </div>
  );
};

export default PdfUpload;



