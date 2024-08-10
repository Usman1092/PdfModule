
// import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

// async function modifyPdf(file, signatureImage, position) {
//   const arrayBuffer = await file.arrayBuffer();
//   const pdfDoc = await PDFDocument.load(arrayBuffer);

//   const pages = pdfDoc.getPages();
//   const firstPage = pages[0];
//   const { width, height } = firstPage.getSize();

//   // Embed the signature image
//   if (signatureImage) {
//     const signatureImageBytes = await fetch(signatureImage).then(res => res.arrayBuffer());
//     const signatureImageEmbed = await pdfDoc.embedPng(signatureImageBytes);

//     const signatureDims = signatureImageEmbed.scale(0.5);

//     firstPage.drawImage(signatureImageEmbed, {
//       x: position.x,
//       y: height - position.y - signatureDims.height,
//       width: signatureDims.width,
//       height: signatureDims.height,
//     });
//   }

//   const pdfBytes = await pdfDoc.save();
//   return pdfBytes;
// }

// export default modifyPdf;








// import { PDFDocument } from "pdf-lib";

// async function modifyPdf(file, signatureUrl, position, scale) {
//   const arrayBuffer = await file.arrayBuffer();
//   const pdfDoc = await PDFDocument.load(arrayBuffer);

//   const pages = pdfDoc.getPages();
//   const firstPage = pages[0];
//   const { height } = firstPage.getSize();

//   if (signatureUrl) {
//     const signatureUrlBytes = await fetch(signatureUrl).then((res) =>
//       res.arrayBuffer()
//     );
//     const signatureUrlEmbed = await pdfDoc.embedPng(signatureUrlBytes);
//     const scaledSignature = signatureUrlEmbed.scale(scale);

//     // Add the signature to the PDF

//     firstPage.drawImage(signatureUrlEmbed, {
//       x: position.x,
//       y: height - position.y - scaledSignature.height,
//       width: scaledSignature.width,
//       height: scaledSignature.height,
//     });
//   }
// console.log(position.x);
//   const pdfBytes = await pdfDoc.save();
//   return pdfBytes;
// }

// export default modifyPdf;




