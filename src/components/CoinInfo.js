// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import { HistoricalChart } from '../config/api';
// import { CryptoState } from '../CryptoContext';
// import { CircularProgress, ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
// import { Line } from "react-chartjs-2";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     width: "75%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 25,
//     padding: 40,
//     [theme.breakpoints.down("md")]: {
//       width: "100%",
//       marginTop: 0,
//       padding: 20,
//       paddingTop: 0,
//     },
//   },
// }));

// const CoinInfo = ({ coin }) => {
//   const classes = useStyles();
//   const [historicData, setHistoricData] = useState();
//   const [days, setDays] = useState(1);
//   const { currency } = CryptoState();
//   const [flag, setFlag] = useState(false);

//   const fetchHistoricData = async () => {
//     const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
//     setFlag(true);
//     setHistoricData(data.prices);
//   };

//   useEffect(() => {
//     fetchHistoricData();
//   }, [days]);

//   const darkTheme = createTheme({
//     palette: {
//       primary: {
//         main: "#fff",
//       },
//       type: "dark",
//     },
//   });

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <div className={classes.container}>
//         {!historicData ? (
//           <CircularProgress
//             style={{ color: "gold" }}
//             size={250}
//             thickness={1}
//           />
//         ) : (
//          <>
//           <Line
//               data={{
//                 labels: historicData.map((coin) => {
//                   let date = new Date(coin[0]);
//                   let time =
//                     date.getHours() > 12
//                       ? `${date.getHours() - 12}:${date.getMinutes()} PM`
//                       : `${date.getHours()}:${date.getMinutes()} AM`;
//                   return days === 1 ? time : date.toLocaleDateString();
//                 })
//               }}
//                 />
//          </>
//         )}
//       </div>
//     </ThemeProvider>
//   );
// };

// export default CoinInfo;

