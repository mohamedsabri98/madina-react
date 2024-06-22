import { Table } from "react-bootstrap";

function RebarInfoTable() {
  return (
    <Table striped bordered responsive >
      <thead>
        <tr style={{ textAlign: "center", backgroundColor: "#e75039" }}>
          <th>
            <strong>Color Code</strong>
          </th>
          <th>
            <strong>Length/ Meter</strong>
          </th>
          <th>
            <strong>Weight / Max (KG)</strong>
          </th>
          <th>
            <strong>Weight/ Per Meter</strong>
          </th>
          <th>
            <strong>Diameter (MM)</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ textAlign: "center" }}>
          <td>Green</td>
          <td>12</td>
          <td>7.404</td>
          <td>0.617</td>
          <td>10</td>
        </tr>
        <tr style={{ textAlign: "center", backgroundColor: "#e75039" }}>
          <td>Red</td>
          <td>12</td>
          <td>10.656</td>
          <td>0.888</td>
          <td>12</td>
        </tr>
        <tr style={{ textAlign: "center" }}>
          <td>Blue</td>
          <td>12</td>
          <td>18.960</td>
          <td>1.58</td>
          <td>16</td>
        </tr>
        <tr style={{ textAlign: "center", backgroundColor: "#e75039" }}>
          <td>White</td>
          <td>12</td>
          <td>24.000</td>
          <td>2.00</td>
          <td>18</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default RebarInfoTable;
