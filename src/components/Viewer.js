


// 2nd final
// import React from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import Draggable from "react-draggable";

// // Set the workerSrc for PDF.js
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// const Viewer = ({ file, signatureUrl, position, onDrag }) => {
//   return (
//     <div style={{ position: 'relative' }}>
      
//       {signatureUrl && (
//         <Draggable axis="both"
//          defaultPosition={position}
//          onDrag={onDrag}
//          allowAnyClick={false}
//         //  bounds={{ top: -100, left: -100, bottom:100, right: 100 }}
       
//         >
//           <img
//             src={signatureUrl}
//             alt="Signature"
//             style={{
//               position: 'absolute',
//               zIndex: 1000,
//               top: position.y,
//               left: position.x,
//               transform: `translate(${position.x}px, ${position.y}px)`,
//             }}
//           />
//         </Draggable>
//      )}
//         <Document
//         className="file"
//         file={file}
//         onLoadError={(error) => console.error("Error loading PDF:", error)}
//         onLoadSuccess={(pdf) => console.log("Loaded PDF:", pdf)}
//       >
//         <Page
//           pageNumber={1}
//           renderTextLayer={false}
//           renderAnnotationLayer={false}
//         />
     
//       </Document>
     
//     </div>
//   );
// };

// export default Viewer;








import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Draggable from "react-draggable";

// Set the workerSrc for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Viewer = ({ file, signatureUrl, position, onDrag }) => {
  const [pdfDimensions, setPdfDimensions] = useState({ width: 0, height: 0 });

  const handlePdfLoadSuccess = async (pdf) => {
    try {
      const page = await pdf.getPage(1); // Get the first page
      const viewport = page.getViewport({ scale: 1 });
      setPdfDimensions({ width: viewport.width, height: viewport.height });
    } catch (error) {
      console.error("Error getting page dimensions:", error);
    }
  };
  console.log(pdfDimensions);
  console.log(position);

  return (
    <div style={{ position: 'relative' }} className="pdf-render">
      <Document
        className="file"
        file={file}
        onLoadError={(error) => console.error("Error loading PDF:", error)}
        onLoadSuccess={handlePdfLoadSuccess}
      >
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      {signatureUrl && (
        <Draggable
          axis="both"
          position={position}
          onDrag={onDrag}
          allowAnyClick={false}
          bounds="parent"
        >
          <img
            src={signatureUrl}
            alt="Signature"
            style={{
              position: 'absolute',
              zIndex: 1000,
              width:100,
              height:'auto',
              top: position.y,
              left: position.x,
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
          />
        </Draggable>
      )}
    </div>
  );
};

export default Viewer;
