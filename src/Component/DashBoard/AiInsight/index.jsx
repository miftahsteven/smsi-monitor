import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
// import PerformanceOverview from "./PerformanceOverview/PerformanceOverview";
import AllServices from "./AllServices";
// import NumberOfCalculation from "./NumberCalculation";
// import BussinessGrowth from "./BusinessGrowth";
import OurActivities from "./OurActivities";
// import NewProduct from "./NewProducts/NewProduct";
// import Payment from "./Payments";
// import ProductMarketValue from "./ProductMarketValue";
// import MediaSmsi from "./AllServices/MediaSmsi";
import {
  Document,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useExportSummary1, useExportSummary2 } from "../../../Hooks/Provinces";
import ManageSocMedData from "./ManageSocMedData";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Times-Roman",
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 12,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#1a1a1a",
    borderBottom: "1px solid #000",
    paddingBottom: 3,
  },
  paragraph: {
    marginBottom: 8,
    textAlign: "justify",
  },
});

function parseSections(text) {
  const sections = [];
  const lines = text.split("\n");
  let currentSection = { title: "", content: [] };

  lines.forEach((line) => {
    const headingMatch = line.match(/^===\s*(.*?)\s*===/);
    if (headingMatch) {
      if (currentSection.title || currentSection.content.length) {
        sections.push(currentSection);
      }
      currentSection = { title: headingMatch[1], content: [] };
    } else if (line.trim() !== "") {
      currentSection.content.push(line);
    }
  });

  if (currentSection.title || currentSection.content.length) {
    sections.push(currentSection);
  }

  return sections;
}

const ReportDocument = ({ text }) => {
  if (!text) return;
  const sections = parseSections(text);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {sections.map((section, idx) => (
          <View key={idx} style={styles.section}>
            {section.title && (
              <Text style={styles.heading}>{section.title}</Text>
            )}
            {section.content.map((paragraph, i) => (
              <Text key={i} style={styles.paragraph}>
                {paragraph.replace(/\[(.*?)\]\((.*?)\)/g, "$1 ($2)")}
              </Text>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
};

const AiInsightContain = () => {
  const { data: executiveSummary1 } = useExportSummary1();
  const { data: executiveSummary2 } = useExportSummary2();

  return (
    <Fragment>
      <Container fluid={true} className="ecommerce-dash">
        <Row className="mb-3">
          <Col
            md="12"
            className="d-flex justify-content-end align-items-center"
          >
            <PDFDownloadLink
              document={<ReportDocument text={executiveSummary1} />}
              fileName="Laporan-Executive1.pdf"
            >
              {({ loading, error }) => (
                <button className="btn btn-sm btn-secondary me-2 btn-pill btn-air-secondary">
                  {loading ? (
                    "Menyiapkan..."
                  ) : error ? (
                    "Gagal download, cek koneksi internet"
                  ) : (
                    <span>
                      <i
                        className="icofont icofont-file-pdf me-2"
                        style={{ fontSize: "1.3em" }}
                      ></i>
                      Export Executive 1
                    </span>
                  )}
                </button>
              )}
            </PDFDownloadLink>
            <PDFDownloadLink
              document={<ReportDocument text={executiveSummary2} />}
              fileName="Laporan-Executive2.pdf"
            >
              {({ loading, error }) => (
                <button className="btn btn-sm btn-secondary btn-pill btn-air-secondary">
                  {loading ? (
                    "Menyiapkan..."
                  ) : error ? (
                    "Gagal download, cek koneksi internet"
                  ) : (
                    <span>
                      <i
                        className="icofont icofont-file-pdf me-2"
                        style={{ fontSize: "1.3em" }}
                      ></i>
                      Export Executive 2
                    </span>
                  )}
                </button>
              )}
            </PDFDownloadLink>
            {/* <UncontrolledDropdown>
              <DropdownToggle
                color="info"
                caret
                className="btn btn-pill btn-air-info"
              >
                Export Executive Summary
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Download</DropdownItem>
                <DropdownItem tag="span" style={{ padding: 0 }}>
                  <PDFDownloadLink
                    document={<ReportDocument text={executiveSummary1} />}
                    fileName="laporan_executive1.pdf"
                  >
                    {({ loading, error }) => (
                      <span
                        style={{
                          display: "block",
                          padding: "0.25rem 1.5rem",
                          color: "#212529",
                        }}
                      >
                        {loading
                          ? "Menyiapkan dokumen.."
                          : error
                          ? "Gagal download, cek koneksi internet"
                          : "Executive 1"}
                      </span>
                    )}
                  </PDFDownloadLink>
                </DropdownItem>
                <DropdownItem>Executive 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Col>
        </Row>
        <Row className="size-column">
          {/* <PerformanceOverview /> */}
          <AllServices />
          <OurActivities />
          <ManageSocMedData />
          {/* <NumberOfCalculation /> */}
          {/* <BussinessGrowth /> */}
          {/* <NewProduct /> */}
          {/* <Payment /> */}
          {/* <ProductMarketValue /> */}
          {/* <MediaSmsi /> */}
        </Row>
      </Container>
    </Fragment>
  );
};
export default AiInsightContain;
