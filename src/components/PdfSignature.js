
//2nd final
// import React, { useRef, useState } from 'react';
// import SignatureCanvas from 'react-signature-canvas';
// import Button from '@mui/material/Button';
// import Draggable from 'react-draggable';

// const PdfSignature = ({ onSave }) => {
//   const sigCanvas = useRef({});
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [signatureUrl, setSignatureUrl] = useState(null);

//   const clear = () => sigCanvas.current.clear();

//   const saveSignature = () => {
//     const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
//     setSignatureUrl(dataURL);
//     onSave(dataURL, position); // Pass the dataURL and position to the parent component
//   };

//   const handleDrag = (e, data) => {
//     setPosition({ x: data.x, y: data.y });
//   };

//   return (
//     <div>
//       <h3>Sign Inside the Box</h3>
//       <div style={{ border: "2px dashed black", width: 500, height: 200, marginTop: "20px",marginLeft:"350px" }}>
//         <SignatureCanvas ref={sigCanvas} canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
//       </div>
//       <Button style={{ marginTop: "10px", marginRight: "20px" }} onClick={clear} variant="contained">Clear</Button>
//       <Button style={{ marginTop: "10px", marginRight: "20px" }} onClick={saveSignature} variant="contained">Save</Button>
//       {signatureUrl && (
//         <Draggable
//           axis="both"
//           defaultPosition={{ x: 0, y: 0 }}
//           position={null}
//           onDrag={handleDrag}
//         >
//           <div style={{ position: 'absolute', zIndex: 1000 }}>
//             <img src={signatureUrl} alt="Signature" style={{ width: 100, height: 50 }} />
//           </div>
//         </Draggable>
//       )}
//     </div>
//   );
// };

// export default PdfSignature;





// import React, { useRef, useState } from "react";
// import SignatureCanvas from "react-signature-canvas";
// import { Button, Slider } from "@mui/material";
// import Draggable from "react-draggable";
// const PdfSignature = ({ onSave }) => {
//   const sigCanvas = useRef({});
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [signatureUrl, setSignatureUrl] = useState(null);
//   const [scale, setScale] = useState(1);

//   const clear = () => sigCanvas.current.clear();

//   const saveSignature = () => {
//     const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
//     setSignatureUrl(dataURL);
//     onSave(dataURL, position, scale);
//   };

//   const handleDrag = (e, data) => {
//     setPosition({ x: data.x, y: data.y });
//   };

//   const handleScaleChange = (event, newValue) => {
//     setScale(newValue);
//   };
//   console.log(position);
//   console.log(signatureUrl);
//   return (
//     <div>
//       <h3>Sign Inside the Box</h3>
//       <div
//         style={{
//           border: "2px dashed black",
//           width: 500,
//           height: 200,
//           marginTop: "20px",
//         }}
//       >
//         <SignatureCanvas
//           ref={sigCanvas}
//           canvasProps={{ width: 500, height: 200, className: "sigCanvas" ,marginLeft:"350px" }}
//         />
//       </div>
//       <Button
//         style={{ marginTop: "10px", marginRight: "20px" }}
//         onClick={clear}
//         variant="contained"
//       >
//         Clear
//       </Button>
//       <Button
//         style={{ marginTop: "10px", marginRight: "20px" }}
//         onClick={saveSignature}
//         variant="contained"
//       >
//         Save
//       </Button>
//       {signatureUrl && (
//         <div>
//           <Slider
//             value={scale}
//             min={0.1}
//             max={3}
//             step={0.05}
//             onChange={handleScaleChange}
//             aria-labelledby="scale-slider"
//           />
//           <Draggable
//             axis="both"
//             position={position}
//             onDrag={handleDrag}
//             allowAnyClick={true}
//           >
//             <div style={{ position: "absolute", zIndex: 1000 }}>
//               <img
//                 src={signatureUrl}
//                 alt="Signature"
//                 style={{ width: 100, height: 50, transform: `scale(${scale})` }}
//               />
//             </div>
//           </Draggable>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PdfSignature;





