import React from "react";
import Home from "./Home";
import data from "./data.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const HomePage = () => {
  //filter
  let datafilter = data.filter((item, index) => {
    if (item.section_role === "student") return item;
  });
  //map
  // let datafd=[];

  // datafilter.map((item,index)=>{

  //  let datafind= item?.modules?.find(item2=>{
  //     item2?.metadatainfo[0]["data"] == "Fun activity"&& item2?.modename =="quiz"
  //   })

  //   datafd.push({
  //     id:item.name,
  //     type: datafind?.id

  //   })
  // })

  console.log(datafilter, "data");

  return (
    <>
      <Home />
      <div className="container">
        <h1>
          Welcome to Homepage which is only visible when you are logged in{" "}
        </h1>

        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Subject</TableCell>
                  <TableCell align="right">Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {datafilter.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.section_role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default HomePage;
