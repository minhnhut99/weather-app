import React from "react";
import "./Home.scss";
import Cloud from "../images/Cloud.png";
import { TextField } from "@mui/material";
import { BsSearch } from "react-icons/bs";
interface City {
  city: string | undefined;
  setCity: string | undefined;
}
const Home = ({ city, setCity }: City) => {
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      <div className="home-weather">
        <div className="header">
          <h1>Dự báo thời tiết</h1>
        </div>
        <img className="weather-img" src={Cloud} alt="" />
        <div className="bottom">
          <h3>Chọn thành phố?</h3>
          <div className="search">
            <TextField
              id="standard-basic"
              label="Ví dụ: Ho Chi Minh"
              variant="outlined"
              sx={{ width: 200 }}
              onChange={handleChange}
            />
            <button>
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
