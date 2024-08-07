

// import React, { useRef } from 'react';
// import SignatureCanvas from 'react-signature-canvas';

// const PdfSignature = () => {
//   const sigCanvas = useRef({});

//   const clear = () => sigCanvas.current.clear();

//   const save = () => {
//     const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
//     console.log(dataURL); // Handle the dataURL (e.g., send to server or attach to PDF)
//   };

//   return (
//     <div style={{border:"2px solid black",width: 500, height: 200 ,backgroundColor:'rgb(226, 226, 217)',marginTop:"20px", marginLeft:"350px"
//      }}>
//       <SignatureCanvas ref={sigCanvas} canvasProps={{ width: 500, height: 200, className: 'sigCanvas', }} />
//       <button onClick={clear}>Clear</button>
//       <button onClick={save}>Save</button>
//     </div>
//   );
// };

// export default PdfSignature;






// import React, { useRef } from 'react';
// import SignatureCanvas from 'react-signature-canvas';
// const PdfSignature = () => {
//   const sigCanvas = useRef({});

//   const clear = () => sigCanvas.current.clear();

//   const save = () => {
//     const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
//     console.log(dataURL); // Handle the dataURL (e.g., send to server or attach to PDF)
//   };

//   return (
//     <div
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: 1,
//       }}
//     >
//       <SignatureCanvas ref={sigCanvas} canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
//       <button onClick={clear}>Clear</button>
//       <button onClick={save}>Save</button>
//     </div>
//   );
// };
// export default PdfSignature








// import React, { useRef } from 'react';
// import SignatureCanvas from 'react-signature-canvas';
// import Button from '@mui/material/Button';
// import Draggable from 'react-draggable';
// const PdfSignature = ({ onSave }) => {
//   const sigCanvas = useRef({});

//   const clear = () => sigCanvas.current.clear();

//   const save = () => {
//     const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
//     onSave(dataURL); // Pass the dataURL to the parent component
//   };

//   return (
//     <>
   
//        <h3 className='heading'>Sign Inside the box</h3>
//    <div className="handle" style={{border:"2px dashed black",width: 500, height: 200 ,marginTop:"20px", marginLeft:"350px", }}>

//       <SignatureCanvas ref={sigCanvas} canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
     
//       <Button style={{ marginTop:"10px",marginLeft:"20px", marginRight:"20px"}} component="label" role={undefined} onClick={clear} variant="contained" tabIndex={-1}>Clear</Button>
//       <Button style={{marginTop:"10px",marginLeft:"20px", marginRight:"20px"}} component="label" role={undefined} onClick={save} variant="contained" tabIndex={-1}>Save</Button>
     
//     </div>
  
//     </>

//   );
// };

// export default PdfSignature;
 {/* <button onClick={clear}>Clear</button> */} {/* <button onClick={save}>Save</button> */}









import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Button from '@mui/material/Button';
import Draggable from 'react-draggable';

const PdfSignature = ({ onSave }) => {
  const sigCanvas = useRef({});
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [signatureUrl, setSignatureUrl] = useState(null);

  const clear = () => sigCanvas.current.clear();

  const saveSignature = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    setSignatureUrl(dataURL);
    onSave(dataURL, position); // Pass the dataURL and position to the parent component
  };

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <div>
      <h3>Sign Inside the Box</h3>
      <div style={{ border: "2px dashed black", width: 500, height: 200, marginTop: "20px" }}>
        <SignatureCanvas ref={sigCanvas} canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
      </div>
      <Button style={{ marginTop: "10px", marginRight: "20px" }} onClick={clear} variant="contained">Clear</Button>
      <Button style={{ marginTop: "10px", marginRight: "20px" }} onClick={saveSignature} variant="contained">Save</Button>
      {signatureUrl && (
        <Draggable
          axis="both"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          onDrag={handleDrag}
        >
          <div style={{ position: 'absolute', zIndex: 1000 }}>
            <img src={signatureUrl} alt="Signature" style={{ width: 100, height: 50 }} />
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default PdfSignature;










