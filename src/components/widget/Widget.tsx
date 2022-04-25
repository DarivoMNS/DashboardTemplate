import React from 'react';
import './widget.css'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = (type: any) => {
    let data;

    // Temp data
    const amount: number = 1000000;
    const diff: number = 20;

    switch(type) {
        case "user":
            data={
                widthTitle: "Users",
                isMoney: false,
                widgetLink: "View all users",
                widgetIcon: (
                    <PersonOutlineIcon className="widgetIcon" />
                )
            };

            break;
        case "product":
            data={
                widthTitle: "Products",
                isMoney: false,
                widgetLink: "View all products",
                widgetIcon: (
                    <StoreOutlinedIcon className="widgetIcon" />
                )
            };

            break;
        case "orders":
            data={
                widthTitle: "Orders",
                isMoney: false,
                widgetLink: "View details",
                widgetIcon: (
                    <CreditCardOutlinedIcon className="widgetIcon" />
                )
            };

            break;
        case "earning":
            data={
                widthTitle: "Earnings",
                isMoney: true,
                widgetLink: "View net earnings",
                widgetIcon: (
                    <MonetizationOnOutlinedIcon className="widgetIcon" />
                )
            };

            break;
        default: 
            break;
    }

    return (
        <div className="widget">
            <div className="widgetLeft">
                <span className="widgetTitle">
                    {/* {data?.widthTitle} */}
                    Title
                </span>

                <span className="widgetcounter">
                    {/* {data?.isMoney && "$"} {amount} */}
                    {amount}
                </span>
                <span className="widgetLink">
                    {/* {data?.widgetLink} */}
                    Widget Link
                </span>
            </div>
            <div className="widgetRight">
                <div className="widgetPercentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}
                </div>
                {/* {data?.widgetIcon} */}
                <MonetizationOnOutlinedIcon />
            </div>
        </div>
    )
}

export default Widget