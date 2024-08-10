// import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
// import { Button, Slider } from "@mui/material";
// import { Document, Page, pdfjs } from 'react-pdf';
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
// export const Upload = ({ onFileUpload }) => {
// //   const [pdfFile, setPdfFile] = useState(null);
// // pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// const[uploadFile,setUploadFile] = useState(null);
//   const uploadFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "application/pdf") {
//       const url = URL.createObjectURL(file);
//       setUploadFile(url);
//       onFileUpload(url);
//     }
//   };
//   console.log(uploadFile);
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
//           onChange={uploadFileChange}
//         />
//       </Button>
//       </div>
//   );
// };




import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const Upload = ({ onFileUpload }) => {
  const [uploadFile, setUploadFile] = useState(null);

  const uploadFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setUploadFile(url);
      onFileUpload(url); // Pass the file URL to the parent component or handler
    }
  };

  return (
    <div className="pdf-upload">
      <Button component="label" variant="contained">
        Upload Your PDF
        <VisuallyHiddenInput
          type="file"
          accept="application/pdf"
          onChange={uploadFileChange}
        />
      </Button>
    </div>
  );
};
