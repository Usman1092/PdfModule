// import React, { useState } from "react";
// import PdfSignature from "./PdfSignature";
// import PdfViewer from "./PdfViewer";
// import { styled } from "@mui/material/styles";
// import { Button,Slider } from "@mui/material";
// import modifyPdf from "./NewModifed";
// import Draggable from "react-draggable";

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

// const PdfUpload = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [pdfFile, setPdfFile] = useState(null);
//   const [modifiedPdf, setModifiedPdf] = useState(null);
//   const [signatureUrl, setSignatureUrl] = useState(null);
//   const [signaturePosition, setSignaturePosition] = useState({ x: 0, y: 0 });
//   const [scale, setScale] = useState(1);


//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "application/pdf") {
//       const url = URL.createObjectURL(file);
//       setPdfFile(url);
  
//       // if (signatureUrl) {
//       //   const modifiedPdfBytes = await modifyPdf(
//       //     file,
//       //     signatureUrl,
//       //     signaturePosition,
//       //     scale
//       //   );
//       //   const modifiedPdfUrl = URL.createObjectURL(
//       //     new Blob([modifiedPdfBytes], { type: "application/pdf" })
//       //   );
//       //   setModifiedPdf(modifiedPdfUrl);
//       // }
//     }
//   };

//   // const handleSignatureSave = async (signature, position, scale) => {
//   //   setSignatureUrl(signature);
//   //   setSignaturePosition(position);
//   //   setScale(scale);

//   //   if (pdfFile) {
//   //     const response = await fetch(pdfFile);
//   //     const file = await response.blob();
//   //     const modifiedPdfBytes = await modifyPdf(
//   //       file,
//   //       signature,
//   //       position,
//   //       scale
//   //     );
//   //     const modifiedPdfUrl = URL.createObjectURL(
//   //       new Blob([modifiedPdfBytes], { type: "application/pdf" })
//   //     );
//   //     setModifiedPdf(modifiedPdfUrl);
//   //   }
//   // };

//   // const handlePositionChange = (position) => {
//   //   setSignaturePosition(position);
//   // };

//   // const downloadPdf = () => {
//   //   const link = document.createElement("a");
//   //   link.href = modifiedPdf;
//   //   link.download = "modified.pdf";
//   //   link.click();
//   // };
// console.log(pdfFile);
//   return (
//     <div className="pdf-upload">
//       <Button
//         component="label"
//         role={undefined}
//         variant="contained"
//         tabIndex={-1}
//       >
//         Upload Your Pdf
//         <VisuallyHiddenInput
//           type="file"
//           accept="application/pdf"
//           onChange={handleFileChange}
//         />
//       </Button>
//       {/* PDF VIEWER */}
//       {/* {pdfFile && (
//         <PdfViewer
//           file={pdfFile}
//           signatureUrl={signatureUrl}
//           position={signaturePosition}
//           onPositionChange={handlePositionChange}
//           scale={scale}
//           setScale={setScale}
//         />
//       )} */}

//       {/* PDF Signature Component */}

//       {/* <PdfSignature onSave={handleSignatureSave} /> */}

//       {/* Modifed pdf show */}
//       {/* {modifiedPdf && (
//         <div>
//           <h3
//             style={{
//               marginTop: "100px",
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             Modified PDF
//           </h3>
        
//           <PdfViewer
//             file={modifiedPdf}
//             signatureUrl={signatureUrl}
//             position={signaturePosition}
//             onPositionChange={handlePositionChange}
//             scale={scale}
//             setScale={setScale}
//           />
//           <Button variant="contained" color="primary" onClick={downloadPdf}>
//             Download Modified PDF
//           </Button>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default PdfUpload;