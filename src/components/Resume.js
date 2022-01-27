import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Image,
  } from "@react-pdf/renderer";
  import resumePng from "../assets/images/resume.png";
  const styles = StyleSheet.create({
    image: {
      width: 500,
      height: 500,
    },
    page: {
      // backgroundColor: "#d11fb6",
      color: "white",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      margin: "90px 0 0 320px",
      display: "flex",
      alignSelf: "center",
      width: window.innerWidth / 2,
      height: window.innerHeight / 1,
    },
  });
  
  function Resume() {
    return (
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Image src={resumePng} />
            </View>
            <View style={styles.section}>
              <Text>World</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  
  export default Resume;
  