import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { SiCoffeescript } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import InputSet from "../../common/components/inputSet/InputSet";
import { Avatar, Button, Modal } from "rsuite";
import { FaCheck } from "react-icons/fa";
import Supporters from "../../common/components/supporters";

const Home = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [align, setAlign] = useState("right");
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedNumber, setSelectedNumber] = useState("1");

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };
  return (
    <div className="dashboard_content">
      <div className="dashboard_content_inner">
        <div className="dashboard_content_inner-left">
          <div className="feed">
            <img src="https://www.shutterstock.com/image-vector/vector-illustration-blue-sky-white-600nw-2029949744.jpg" />
            <p>
              Hey, 👋 <br /> I just created a page here. if you like my content
              please consider buying <br /> me a coffee.
            </p>
            <span className="icons">
              <FaEarthAmericas />
              <FaSpotify />
              <FaYoutube />
            </span>
          </div>
          <div className="supporters">
            <div className="supporters_header">
              <h5>RECENT SUPPORTERS</h5>
            </div>
            <Supporters />
            <Supporters />
            <Supporters />
            <Supporters />
          </div>
        </div>
        <div className="dashboard_content_inner-right">
          <div className="dashboard_content_inner-right-top">
            <div className="header">
              <h4>
                Buy <span>Olivia Ysabelle</span> a coffee
              </h4>
            </div>
            <div className="coffee-count">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPEBAQDw8ODw8NDxAQDw8PDw0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NFQ8PFSsdFRkrLSsrLSsrKystKys3LSstLS0rLS0tLSsrLSstKy0rKys3LS03LSstKystKysrLSs3Lf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYBBwj/xAA+EAACAQMBBgIHBQYGAwEAAAAAAQIDBBEFBhIhMUFRYXEHEyIyQoGRUnKhsdEUFkNiwfEjRFOSovAzguEV/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAB4RAQEBAQEAAgMBAAAAAAAAAAABERICIWExQVEi/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAHjYHoMN8yyB6DzIyB6AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8wD011k8PAGurdRjzZFq3ya4FNqNWSbyyGr/PDiwL2F48k+hXbKK0hKXgXtpDCAko8yHIwck+oG09MFkyQHoAAAAAAAAAAAAAAAAAAAAAAAAAA8Z5JmRhUjlNAU+oUlUzwWSJYaSt7LLalRSbyY1PYeegGNe1wuHAgQqzTxllt63eRX148fEDfCT6yN9LGcogxot82WFrQwBKyZmOD1AegAAAAAAAAAAAAAAAAAAAAAAAAAAAANc6aZX373VjmWbK+dB7+ZcYgLCD3eIrUssmqKxwMJwAjRoy6EmnPHBmUTXhtgSEemMUZAAAAAAAAAAAAAAAAAAAAAAAA8bA9PMkK+1GnSWZNLw6nLajtXJ5VPgu5LVx2VSvGPNpeZXXOv0IfEn5Hz261OpN8ZNkKVVsz0uO8r7YU17sWyBX2wb5Qicg2YSqxXOUfqidVcdVHa2pyWEZy2lr4ypLHzOOd1TXxo32uoU293fXEdHLqo7TVmuf5ni2prR5xi/kznKV7TTxvoxubyOcb8fqhqY66ltnL4oL5Fhb7XUn7yaPnkKy6NP5o2xqF6MfUrfWaE+U0vPgT4TT4p5XgfIoVscngsLPV6tN+zJl6TH08HK6ZtSpYjVWH3Olo14zScWmn2LKjaACgAAAAAAAAAAAAA8kyo1rVFRhn4n7qLG4lyOG2xqv1uOijwM+qsU+o6hOpJuTb8OiK2pWxxbwvErtY1eFBPLzPojjdQ1epVbzJpdjlfWOk866681+jT4J7z/Ap7naqT9xYOVqXCXN5Is73sif6rWSOir65Wl8b+pFnqVR85FDK4k+pjmT6svF/p1F1K+l9v8TdY3+J53/xZz/q2Z0qbzkcfZ06CWovL9t/VmmWoTz7/wCJTSgzW4svH2dOip6pVXKT+pNobR1Y83n5nIKUl1M43UkTmmx9Btdql8aLyz1WnU92XHsz5TTvF1JdG4a4xlgm2fkyV9bhWL3Q9alSkk23B8Gux8o0naOUGo1OMe/Y7SyuozSlF5TNy6xfOPsVvWUkpLk1lG8pNnZP9ng324eRdRZ0jm9ABQAAAAAAAAAAEe4Rx23tlUlQlcUYudSlFqUFzce6Oxu+SfZkf3vB/gzNWPype3TlKUpt5b4p80+xWVrlvgj79tv6Mre+cqtFq1uX1XCjUf8AMkm/ofGtf2I1Cyk1Wt5SguVSknOEl34cTE8Y6X3rnuLM4wPI9uvbkyTBGkYxpG6NEzgjdFE1calRM40jdFGWCKjOkYSokxowkhogzpGmdMnzRomipiDKIjNo3VMGyw0yvcSUaFGpVbePYi2s+fIqM6Fznmd36ObW4ua6pU4t0edWp8NOPn38CXsp6Ha83GrqFRUKfB+ppvNWXg3jGPmfWrKlbWdJUbeEacI8MR5vxb6mefnVvv4xZ5jShGC4KKUUbLjVqFKKc6kVlcEnlv5HN6pfONOdRvGIt+XA+eq6rXdZRpxlOXJJf94GpXN9Xe09JvEVnxySrfWIz/ucZYbGXsknOpTpLtmTkvwwWD2RvIcaVzBtdJ72H9Ea+R2VG4UvM3nD2Gr1aNVW93B0qj9yfwVPJnZW1XeimJUbgAUAAAPJSxxfAjX17CjHek/JdWcfq2uVKuUvZj2X9SW4OkudWpOaoxe9KT5rkmG8HE2tRxqQn2kmdtL8+JndaZ+u7mEnFpro+afFM0zZGqVBorNY2N026z622gm/ipP1Tz39k4/UPQ5bPLt7udJ9Izp76/3OR2txctECpqUl1Jo+e3Xokv4f+Otb1V95xb+WCurejvVYf5dT+5LJ9P8A/wByS6j945IfC7Xyaex+pR52dX5JP+pqezV+v8pW/wBq/U+vfvTJf3MXtbIZF6r5NHZTUXytK30X6kinsJqkuVpNfeaR9MltfMj1Nrqn/WMh1XE0PRZqc/e9TSX81R/oW1p6HnwdxfRiusadNS/HKLWrtRVfxfiyHPW6kvif1YTat9O2A0e14zjK4mutScks/dy0dBS1S3oLdt6UKa5exGMfyOFjeSfNsmUqrY1HS1dWlPqa1VbKygyfS5ogh7aXG5ZyS5zcYr6otfRdYU6VGU3j1s2ll81HHJFJthTdR29JJtObk/kkTrSbpqKXDdRZcH0oHOaTrufZqcez6rzOhhJNZXFM3LrKm2t02Ne1qdJ04urTl1jKPHh9CNsRqDr20JP3kt2X3lwLPaG4VO1rzlyVKa+bTSOV9FLbt5N/bb+rY/au6ABUekTUb6NGDk+fwruyTOWE2+S4nFazeupN9uSXZEtwQtRvZ1ZNyef6EPBt3RumGmrdOz06r6yjCXXGH5o5FQOg2cqezOn2e8gJ1QhVifVRBrICruinuS5uUVFyiKq6zIk5MmV0QqgRplM0yqM2TNEijFzMHIMxKMsmcDWjZBEEugWVuV1uizt0BY26J1LmQ6BMo8WRWV3LLXgjSjOpzyYBGUHjii/0TVXF7kn7L/DxKDOOL+pUanrCScab8HLq/IsFp6RNolVX7LReY5/xJL4n2On2C090bSGeDn7XyOC2T0Z3VeMp8IReX4+B9epQUUorgopJLskaiVmADSK/Wau7SeOvA4yoss67Xl7C8zlZRMevysad0bps3T3dMq1xgTbCpuTjLpyfkaIxNiRR0VXjxXJ8UQK6NmnV96O4/ejy8ULiIFTcxKq5RcXCKu5RBT3CINVFlcRIFVAQpo0TJU0R5oo0NGLNjRjgo8SNtNGCRupogk0EWdAr6MSwoIip9InUuC8yHQRjcatCHBJSIJzNFeqorL+hV1tceOCS8irr1qtZ4y/JGkbdU1aUnup8Oy5fMaVpcqz358I9/wCiN9hpcI+1U4v7P6lzG4S4LglySGi60bdp7sYrCi1wR2lOWUn3SZ8+sLjMl5nfW3uR+6vyNeUraADSImp0t6nJduJyNWOGzuJI5jWbJxbaXDmjPqLFZg83RCZmYVikZBmLYHsari1Jc0WtK4jVjlc+q6plJUkV1W7nSlvwfmukkFdDcQKq5gSrPVKddZi/aXvRfOLPK6TIKK4gV1ZF3cUysuKYVV1CPNk6rAizpl1MRmzHJucDxUxo1xRJpQFOkS6NIaM6ECwoxNVKn16FHrmvrDpUHlvhKa5LwRFWmoavuy9XT44998MeRDlVcuO6l5s5+0b7ssqc2axlPjGPV58FyNyuEuC4Fdvs83mMFkrozV14lWpG63hKclFcSjq9l6bq1Y9s5+R9NgsJLtwOb2N0n1NPfkvalyOmNRKAAqBpuaCnFpm4AcZqenSpttLgQI1jvLigprDOb1TRWsyiYsXVYqiEmRqsJQeGjH1xlWVWZAuo5JFSpkjTZFUteEoS3oNxkuTRMtto8ezWi0+W/Hin5o3VqaZW3NnkC8jeQqLMZKXkyPVZzU7OUXmLcX4MK7uI9d5eKGKuakSPOBXPVaq508+TMXq8v9KX1QE5wPVTKyWrz6Un82jTU1K4fuwjEC+hBI0XOs0KPOW/L7MOP9jnK0bip785Y7Lgj2hpbGJrbf6zVr+yv8On9lc2vFkehbFlR07BLhZFFdCkSKcWT4WXgSIWT7BFeqZ76stadg30LC00NtrPXouLZdFBb2cpvEUd/slsxu4qTXD8yy0PZuMMSmsLmo9X5nTQiksLgkakTXsY4WFyR6AaQAAAAADGUU+ZkAKy90qM1wRzt9orjy4HamMoJ8GskvldfN61rOPNEScT6NcaXTl/K/Dl9Cpu9nn0UZf8TF8LripRNUonRXOiSj8Ml44yivqWGOqM8rqmnSNM7ZFzOyl2NUrV9hgpnZox/YkXDtn2PP2d9gKlWKMlYrsWyt2Zq38AKmNiuxthZlrG2M1SS5tDDVbCzN8LRFpRtJS92E5/djlFjb6FXl8EYrvJ4f0LzU1RU7PwN8LWPXj4LidVb7ML+JUb8ILc/Et7XTqVL3IJPvji/manlNcxp+h1J4e76uPeXvNeB0ljpdOlxS3pfafP/wCE4GpEAAUAAAAAAAAAAAAAAAAeNGqpbQlzjF/I3ACuqaJby/hpN9Vk0S2dodN5eTX6FwAOenstBvhVqJdvZ/Qx/dWH+rU/4/odGCYOcjspHPGtUa/9f0JEdmaHVzfzX6F2C4Kuns/bL+EpPu2yVR0+jD3acV8skoAYxglySXksGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z"
                alt=""
              />{" "}
              <span>x</span>
              <InputSet
                type="number"
                value={selectedNumber}
                onChange={(e) => setSelectedNumber(e.target.value)}
                placeholder="1"
              />
              <button
                onClick={() => handleNumberClick(1)}
                className={selectedNumber === 1 ? "active" : ""}
              >
                1
              </button>
              <button
                onClick={() => handleNumberClick(3)}
                className={selectedNumber === 3 ? "active" : ""}
              >
                3
              </button>
              <button
                onClick={() => handleNumberClick(5)}
                className={selectedNumber === 5 ? "active" : ""}
              >
                5
              </button>
            </div>
            <div className="dashboard_input">
              <InputSet
                name={"message"}
                inputClassName={"widget_input_textarea"}
                placeholder={"Say something nice... (optional)"}
                as={"textarea"}
                // value={bio}
                // onChange={(v) => setBio(v)}
              />
            </div>
            <div className="privatemsg">
              <input type="checkbox" id="privateCheckbox" />
              <label htmlFor="privateCheckbox">Make this message private</label>
              <span className="question">?</span>
            </div>
            <Button appearance="primary" className="primary_button">
              Support <span>($3)</span>
            </Button>
          </div>
          <div className="dashboard_content_inner-right-top">
            <h5>Goals</h5>
            <p>
              <b>$4 of $9</b>goal reached
            </p>
            <input type="range" />
            <p>For new laptop and other design things</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
