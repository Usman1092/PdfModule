// import React, { useRef, useState } from "react";
// import SignatureCanvas from "react-signature-canvas";
// import { Button, Slider } from "@mui/material";
// import Draggable from "react-draggable";
// // const Signature = ({ onSave }) => {
//    const Signature = ({signature}) => {
//   const sigCanvas = useRef({});

//   const [signatureUrl, setSignatureUrl] = useState(null);


//   const clear = () => sigCanvas.current.clear();

//   const saveSignature = () => {
//     const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
//     setSignatureUrl(dataURL);
//     // onSave(dataURL, position, );
//   };


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
//           canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
//           signature={signature}
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
    
//     </div>
//   );
// };

// export default Signature;



import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "@mui/material";

const Signature = ({ onSave }) => {
  const sigCanvas = useRef({});
  const [signatureUrl, setSignatureUrl] = useState(null);

  const clear = () => sigCanvas.current.clear();

  const saveSignature = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setSignatureUrl(dataURL);
    onSave(dataURL);
  };

  return (
    <div className='sign'>
      <h3>Sign Inside the Box</h3>
      <div
        style={{
          border: "2px dashed black",
          width: 500,
          height: 200,
          marginTop: "20px",
        }}
      >
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
          
        />
      </div>
      <Button
        style={{ marginTop: "10px", marginRight: "20px" }}
        onClick={clear}
        variant="contained"
      >
        Clear
      </Button>
      <Button
        style={{ marginTop: "10px", marginRight: "20px" }}
        onClick={saveSignature}
        variant="contained"
      >
        Save
      </Button>
    </div>
  );
};

export default Signature;
