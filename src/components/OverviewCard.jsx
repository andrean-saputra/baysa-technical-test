import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ArrowUp from "../assets/arrowUp.png";
import ArrowDown from "../assets/arrowDown.png";
import Minus from "../assets/minus.png";

const stats = [
  {
    id: 1,
    name: "Views our ads",
    value: "224.5k",
    logoBackground: "e5f6ef",
    backgroundColor: "f5fcf9",
    icon: ArrowUp,
  },
  {
    id: 2,
    name: "Comment our ads",
    value: "34.3k",
    logoBackground: "fdf4e0",
    backgroundColor: "fffbf1",
    icon: Minus,
  },
  {
    id: 3,
    name: "Create account",
    value: "153.2k",
    logoBackground: "e5f6ef",
    backgroundColor: "f5fcf9",
    icon: ArrowUp,
  },
  {
    id: 4,
    name: "Other platform",
    value: "132.5k",
    logoBackground: "ffefeb",
    backgroundColor: "fff6f4",
    icon: ArrowDown,
  },
];

export default function BasicCard() {
  return (
    <>
      {stats.map((item) => (
        <Card
          key={item.id}
          sx={{ minWidth: 275 }}
          style={{ backgroundColor: "#" + item.backgroundColor }}
          className="cardOverview"
        >
          <CardContent>
            <div className="logoWrapper" style={{ backgroundColor: "#" + item.logoBackground }}>
              <img src={item.icon} />
            </div>
            <div className="textWrapper">
              <div className="cardTitleWrapper">
                <p className="cardTitle">{item.value}</p>
              </div>
              <p className="cardSubtitle">{item.name}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
