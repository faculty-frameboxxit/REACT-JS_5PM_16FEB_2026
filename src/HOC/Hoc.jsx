
import Hello from "./Button";
import withMessage from "./ButtonHoc";

function Hoc() {
  const HelloWithMessage = withMessage(Hello);
  return (
    <>
      <div>
      <h1>Hoc</h1>
      <HelloWithMessage />
    </div>
    </>
  );
}

export default Hoc;
