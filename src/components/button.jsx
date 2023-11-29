const alertButton = (label) => {
  alert(`A label desse botão é ${label}`);
};

const Button = ({ label }) => {
  return (
    <>
      <button onClick={() => alertButton(label)}>{label}</button>
    </>
  );
};

export default Button;
