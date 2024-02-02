import * as React from "react";
import Logo1 from "../assets/drawillusion.png";
import Logo2 from "../assets/apple.png";

const ads = [
  {
    id: 1,
    name: "Lead Visual Designer",
    company: "DrawIllusion",
    location: "Moscow, Russia",
    status: "10 days left online",
    icon: Logo1,
  },
  {
    id: 2,
    name: "UI/UX Designer",
    company: "Apple",
    location: "California, USA",
    status: "15 days left online",
    icon: Logo2,
  },
  {
    id: 3,
    name: "Brand Strategist",
    company: "DrawIllusion",
    location: "Moscow, Russia",
    status: "10 days left online",
    icon: Logo1,
  },
  {
    id: 4,
    name: "Marketing Strategist",
    company: "Apple",
    location: "California, USA",
    status: "15 days left online",
    icon: Logo2,
  },
  {
    id: 5,
    name: "iOS Developer Mobile",
    company: "DrawIllusion",
    location: "Moscow, Russia",
    status: "10 days left online",
    icon: Logo1,
  },
  {
    id: 6,
    name: "HR Manager",
    company: "Apple",
    location: "California, USA",
    status: "15 days left online",
    icon: Logo2,
  },
  {
    id: 7,
    name: "Frontend Developer",
    company: "DrawIllusion",
    location: "Moscow, Russia",
    status: "10 days left online",
    icon: Logo1,
  },
  {
    id: 8,
    name: "Backend Developer",
    company: "Apple",
    location: "California, USA",
    status: "15 days left online",
    icon: Logo2,
  },
  {
    id: 9,
    name: "Senior Finance Manager",
    company: "DrawIllusion",
    location: "Moscow, Russia",
    status: "10 days left online",
    icon: Logo1,
  },
  {
    id: 10,
    name: "Digital Marketeer",
    company: "Apple",
    location: "California, USA",
    status: "15 days left online",
    icon: Logo2,
  },
  {
    id: 11,
    name: "Digital Marketeer",
    company: "DrawIllusion",
    location: "Moscow, Russia",
    status: "10 days left online",
    icon: Logo1,
  },
  {
    id: 12,
    name: "Senior Backend Developer",
    company: "Apple",
    location: "California, USA",
    status: "15 days left online",
    icon: Logo2,
  },
];

const App = () => {
  return (
    <div className="stackedBarWrapper jobadsMainWrapper">
      <div className="jobadsHeaderWrapper">
        <div className="stackedBarTitle jobAdsTitleWrapper">
          <div className="titleWrapper">
            <p className="text-slate-500">RECENT JOB ADS</p>
            <h3>
              16<span className="text-gray-400">/24</span>
            </h3>
          </div>
          <p className="text-slate-500 statsButton">5 Job ads left</p>
        </div>
        <div className="divider"></div>
      </div>
      <div className="stackedBarContent jobAdsContent">
        {ads.map((item) => (
          <div className="jobadsWrapper">
            <div className="jobadslogo">
              <img className="jobadslogo" src={item.icon} alt="" />
            </div>
            <div className="jobadscontent">
              <div className="jobadstitle">{item.name}</div>
              <div className="jobadssubtitle">
                {item.company} &#x2022; {item.location}
              </div>
              <div className="jobadsstatus"><span className="onlineIndicator">&#x2022;</span> {item.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
