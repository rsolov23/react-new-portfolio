import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Document, Page, pdfjs } from "react-pdf";
import url from "../assets/images/resume.pdf";

export default function Test() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  /*To Prevent right click on screen*/
  // document.addEventListener("contextmenu", (event) => {
  //   event.preventDefault();
  // });

  /*When document gets loaded successfully*/
  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  //   setPageNumber(1);
  // }

  // function changePage(offset) {
  //   setPageNumber((prevPageNumber) => prevPageNumber + offset);
  // }

  // function previousPage() {
  //   changePage(-1);
  // }

  // function nextPage() {
  //   changePage(1);
  // }

  return (
    <Box>
      <Flex justifyContent="center">
        <div className="main">
          <Document file={url} 
          // onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          {/* <div>
            <div className="pagec">
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </div>
            <div className="buttonc">
              <button
                type="button"
                disabled={pageNumber <= 1}
                // onClick={previousPage}
                className="Pre"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={pageNumber >= numPages}
                // onClick={nextPage}
              >
                Next
              </button>
            </div>
          </div> */}
        </div>
      </Flex>
    </Box>
  );
}
