import React from "react";
import { Button } from "@mui/material";
import { PDFDocument } from "pdf-lib";

const Download = ({ file, signatureUrl, position,pdfDimensions }) => {
  const handleDownload = async () => {
    if (!file || !signatureUrl) {
      alert("Please upload a PDF and add a signature first.");
      return;
    }
  
    // Fetch the original PDF
    const existingPdfBytes = await fetch(file).then((res) => res.arrayBuffer());
  
    // Load the PDF with pdf-lib
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
  
    // Embed the signature image
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const pngImageBytes = await fetch(signatureUrl).then((res) =>
      res.arrayBuffer()
    );
    const pngImage = await pdfDoc.embedPng(pngImageBytes);
  
    // Add the signature image to the PDF
    firstPage.drawImage(pngImage, {
      x: position.x, // Use the correct x coordinate from the position state
      y: position.y, // Use the correct y coordinate from the position state
      width: pngImage.width,
      height: pngImage.height,
    });
  
    // Save the PDF with the signature
    const pdfBytes = await pdfDoc.save();
  
    // Create a Blob from the PDFBytes
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
  
    //download link for the PDF
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "signed.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

 
  console.log(position.x, position.y);
  return (
    <div className="DownloadButton">
      <Button variant="contained" color="primary" onClick={handleDownload}>
        Download Signed PDF
      </Button>
    </div>
  );
};

export default Download;
