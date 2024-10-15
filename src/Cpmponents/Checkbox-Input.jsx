const CheckboxInput = ({ type, title, value, name, onChange, checked }) => {
  return (
    <div>
      <p>{title}</p>
      {/* <br /> */}
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
};

export default CheckboxInput;
