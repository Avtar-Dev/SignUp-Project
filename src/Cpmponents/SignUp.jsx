import React, { useState } from "react";
import InputComp from "./InputComp";
import CheckboxInput from "./Checkbox-Input";
import "../App.css";

const SignUp = () => {
  const jobsData = ["IT", "AI", "HR", "Calling", "Manager"];

  const data = {
    name: "",
    email: "",
    password: "",
    confirmPwd: "",
    maritalStatus: "",
    jobs: [],
    qualification: "",
  };

  const [value, setValue] = useState(data);
  // const [selectValue, setSelectValue] = useState("");

  const InputHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  // const selectHandle = (e) => {
  //   setSelectValue(e.target.value);
  // };

  const jobCheckboxHandler = (e) => {
    // const { value: job, checked } = e.target;
    const job = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setValue((prevValue) => ({
        ...prevValue,
        jobs: [...prevValue.jobs, job],
      }));
    } else {
      setValue((prevValue) => ({
        ...prevValue,
        jobs: prevValue.jobs.filter((j) => j !== job),
      }));
    }
  };

  const BtnHandler = () => {
    console.log("Form data:", value);
    // console.log("Qualification:", selectValue);
  };

  return (
    <div className="main-div">
      <InputComp
        type={"text"}
        name={"name"}
        placeholder={"Enter Name"}
        title={"Name"}
        onChange={InputHandler}
        value={value.name}
      />
      <InputComp
        type={"email"}
        name={"email"}
        placeholder={"Enter Email"}
        title={"Email"}
        onChange={InputHandler}
        value={value.email}
      />

      <label>
        <h4>Qualification</h4>
      </label>
      <select
        name="qualification"
        id="qualification"
        onChange={InputHandler}
        value={value.qualification}>
        <option value="10th">10th</option>
        <option value="12th">12th</option>
        <option value="Post Graduate">Post Graduate</option>
        <option value="Under Graduate">Under Graduate</option>
        <option value="PHD">PHD</option>
      </select>

      <div className="checkbox-group">
        <label>
          <h4>Status</h4>
        </label>
        <CheckboxInput
          type={"checkbox"}
          value={"Married"}
          title={"Married"}
          name={"maritalStatus"}
          onChange={InputHandler}
          checked={value.maritalStatus === "Married"}
        />
        <CheckboxInput
          type={"checkbox"}
          value={"Unmarried"}
          title={"Unmarried"}
          name={"maritalStatus"}
          onChange={InputHandler}
          checked={value.maritalStatus === "Unmarried"}
        />
      </div>

      <div className="job-preference-container">
        <label>
          <h4>Job Preference</h4>
        </label>
        {jobsData.map((job) => (
          <label key={job}>
            <input
              type={"checkbox"}
              value={job}
              name={"jobs"}
              onChange={jobCheckboxHandler}
              checked={value.jobs.includes(job)}
            />
            {job}
          </label>
        ))}
      </div>

      <InputComp
        type={"password"}
        name={"password"}
        placeholder={"Enter Password"}
        title={"Password"}
        onChange={InputHandler}
        value={value.password}
      />
      <InputComp
        type={"password"}
        name={"confirmPwd"}
        placeholder={"Confirm Password"}
        title={"Re-Enter Password"}
        onChange={InputHandler}
        value={value.confirmPwd}
      />
      <button className="btn" onClick={BtnHandler}>
        Submit
      </button>
    </div>
  );
};

export default SignUp;
