import React from 'react'
import "./List.scss"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

      const rows = [
        {
          id: 2117383933399,
          product: "Food Crusher & Blender",
          img: "/assets/blender.jpg",
          customer: "Lee Martin",
          date: "27th September",
          amount: 300,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 6617772543119,
          product: "Nexus 32Inch TV",
          img: "/assets/Tv.jpg",
          customer: "Sebastian Walker",
          date: "5th February",
          amount: 100,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 200116351133,
          product: "Scanfrost 4-Burner Gas Cooker",
          img: "/assets/gascooker.jpg",
          customer: "Lopez Williams",
          date: "1st June",
          amount: 200,
          method: "Online Payment",
          status: "Approved",
        },
        {
          id: 22567721541,
          product: "Bluetooth Multimedia Speakers",
          img: "/assets/speaker.jpg",
          customer: "Alexander White",
          date: "21st August",
          amount: 160,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2117383933399,
          product: "Lenovo Ideapad",
          img: "/assets/laptop2.jpg",
          customer: "Garcia Davis",
          date: "16th February",
          amount: 570,
          method: "Online Payment",
          status: "Approved",
        },
        {
          id: 4520015619,
          product: "Apple Iphone 14 Pro Max",
          img: "/assets/iphone.webp",
          customer: "Camila Michael",
          date: "20th March",
          amount: 1800,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 25566001527,
          product: "3 IN 1 Bag Set",
          img: "/assets/bag.jpg",
          customer: "Madison Anthony",
          date: "3rd October",
          amount: 20,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2117383933399,
          product: "Oroimo FreePods",
          img: "/assets/freepod.jpg",
          customer: "Natalie King",
          date: "29th December",
          amount: 25,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2117383933399,
          product: "Food Crusher & Blender",
          img: "/assets/blender.jpg",
          customer: "Miller Brooks",
          date: "27th September",
          amount: 270,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 6117383933399,
          product: "Food Crusher & Blender",
          img: "/assets/blender.jpg",
          customer: "Lee Martin",
          date: "27th September",
          amount: 300,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 8617772543119,
          product: "Nexus 32Inch TV",
          img: "/assets/Tv.jpg",
          customer: "Sebastian Walker",
          date: "5th February",
          amount: 100,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 200116351133,
          product: "Scanfrost 4-Burner Gas Cooker",
          img: "/assets/gascooker.jpg",
          customer: "Lopez Williams",
          date: "1st June",
          amount: 200,
          method: "Online Payment",
          status: "Approved",
        },
        {
          id: 28567721541,
          product: "Bluetooth Multimedia Speakers",
          img: "/assets/speaker.jpg",
          customer: "Alexander White",
          date: "21st August",
          amount: 160,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2517383933399,
          product: "Lenovo Ideapad",
          img: "/assets/laptop2.jpg",
          customer: "Garcia Davis",
          date: "16th February",
          amount: 570,
          method: "Online Payment",
          status: "Approved",
        },
        {
          id: 48820015619,
          product: "Apple Iphone 14 Pro Max",
          img: "/assets/iphone.webp",
          customer: "Camila Michael",
          date: "20th March",
          amount: 1800,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2557766001527,
          product: "3 IN 1 Bag Set",
          img: "/assets/bag.jpg",
          customer: "Madison Anthony",
          date: "3rd October",
          amount: 20,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 21047383933399,
          product: "Oroimo FreePods",
          img: "/assets/freepod.jpg",
          customer: "Natalie King",
          date: "29th December",
          amount: 25,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 21987383933399,
          product: "Food Crusher & Blender",
          img: "/assets/blender.jpg",
          customer: "Miller Brooks",
          date: "27th September",
          amount: 270,
          method: "Cash on Delivery",
          status: "Approved",
        },
      ];

  return (
    <div className = "list">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className = "tableCell" >Tracking ID</StyledTableCell>
            <StyledTableCell className = "tableCell">Product</StyledTableCell>
            <StyledTableCell className = "tableCell">Customer</StyledTableCell>
            <StyledTableCell className = "tableCell">Date</StyledTableCell>
            <StyledTableCell className = "tableCell">Amount</StyledTableCell>
            <StyledTableCell className = "tableCell">Payment Method</StyledTableCell>
            <StyledTableCell className = "tableCell">Status</StyledTableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell className = "tableCell">
                {row.id}
              </StyledTableCell>
              <StyledTableCell className = "tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
                </StyledTableCell>
              <StyledTableCell className = "tableCell">{row.customer}</StyledTableCell>
              <StyledTableCell className = "tableCell">{row.date}</StyledTableCell>
              <StyledTableCell className = "tableCell">R{row.amount}</StyledTableCell>
              <StyledTableCell className = "tableCell">{row.method}</StyledTableCell>
              <StyledTableCell className = "tableCell">
                <span className = {`status ${row.status}`}>{row.status}</span>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default List