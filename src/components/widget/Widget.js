import React from 'react';
import './widget.scss';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({ type }) => {
    let data;
    //temporary
    const amount = 1000;
    const diff = 26;
    switch (type) {
        case "users":
            data = {
                title: "USERS",
                query: "users",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlineOutlinedIcon
                        className="icon"
                        style = {{
                            color: "crimson",
                            backgroundColor: "rgba(250, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
            case "order":
                data = {
                    title: "ORDERS",
                    isMoney: false,
                    link: "See all order",
                    icon: (
                        <ShoppingCartOutlinedIcon
                            className="icon"
                            style = {{
                                color: "goldenrod",
                                backgroundColor: "rgba(218, 165, 32, 0.2)",
                            }}
                        />
                    ),
                };
                break;
                case "earning":
                    data = {
                        title: "EARNINGS",
                        isMoney: true,
                        link: "View net earnings",
                        icon: (
                            <MonetizationOnOutlinedIcon
                                className="icon"
                                style = {{
                                    color: "purple",
                                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                                }}
                            />
                        ),
                    };
                    break;
                    case "products":
                    data = {
                        title: "PRODUCTOS",
                        isMoney: true,
                        query: "products",
                        link: "See details",
                        icon: (
                            <AccountBalanceWalletOutlinedIcon
                                className="icon"
                                style = {{
                                    color: "green",
                                    backgroundColor: "rgba(0, 128, 0, 0.2)",
                                }}
                            />
                        ),
                    };
                    break;
                    default:
                        break;
        }
        // useEffect(() => {
        //     const fetchData = async () => {
        //       const today = new Date();
        //       const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
        //       const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
        
        //       const lastMonthQuery = query(
        //         collection(db, data.query),
        //         where("timeStamp", "<=", today),
        //         where("timeStamp", ">", lastMonth)
        //       );
        //       const prevMonthQuery = query(
        //         collection(db, data.query),
        //         where("timeStamp", "<=", lastMonth),
        //         where("timeStamp", ">", prevMonth)
        //       );
        
        //       const lastMonthData = await getDocs(lastMonthQuery);
        //       const prevMonthData = await getDocs(prevMonthQuery);
        
        //       setAmount(lastMonthData.docs.length);
        //       setDiff(
        //         ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
        //           100
        //       );
        //     };
        //     fetchData();
        //   }, []);
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
                {data.isMoney && "$"} {amount}
            </span>
            <span className="links">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget