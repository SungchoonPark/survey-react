import React, { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import fileDownload from "js-file-download";
import * as XLSX from "xlsx";
import "../css/Admin.css";

const AdminPage = () => {
  const [surveyResults, setSurveyResults] = useState([]);
  const [selectedMember, setSelectedMember] = useState("");

  const handleViewResults = async (member) => {
    try {
      const response = await axios.get(
        `https://cspeak.shop/api/admin/survey/${member}`,
        {
          withCredentials: true,
        }
      );

      const results = Array.isArray(response.data.data)
        ? response.data.data
        : [];

      setSurveyResults(results);
      setSelectedMember(member);
    } catch (error) {
      console.error(`Error fetching survey results for ${member}`, error);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Member Name", "Image Name", "Rating"];
    const tableRows = [];

    surveyResults.forEach((result) => {
      const surveyData = [result.memberName, result.imageName, result.rating];
      tableRows.push(surveyData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save(`${selectedMember}_survey_results.pdf`);
  };

  const downloadCSV = () => {
    const headers = ["Member Name,Image Name,Rating\n"];
    const rows = surveyResults
      .map(
        (result) => `${result.memberName},${result.imageName},${result.rating}`
      )
      .join("\n");
    const csvData = headers + rows;
    fileDownload(csvData, `${selectedMember}_survey_results.csv`);
  };

  const downloadXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(surveyResults);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Survey Results");
    XLSX.writeFile(workbook, `${selectedMember}_survey_results.xlsx`);
  };

  return (
    <div className="admin-container">
      <h1>Survey Results</h1>
      <div className="button-group">
        <button onClick={() => handleViewResults("member1")}>
          View Member1 Results
        </button>
        <button onClick={() => handleViewResults("member2")}>
          View Member2 Results
        </button>
        <button onClick={() => handleViewResults("member3")}>
          View Member3 Results
        </button>
      </div>

      {selectedMember && (
        <div className="results-container">
          <h2>Results for {selectedMember}</h2>
          <button onClick={downloadPDF} className="download-button">
            Download PDF
          </button>
          <button onClick={downloadCSV} className="download-button">
            Download CSV
          </button>
          <button onClick={downloadXLSX} className="download-button">
            Download XLSX
          </button>
        </div>
      )}

      {selectedMember && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Member Name</th>
                <th>Image Name</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {surveyResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.memberName}</td>
                  <td>{result.imageName}</td>
                  <td>{result.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
