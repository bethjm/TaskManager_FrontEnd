import "./SecondaryButton.css";

function SecondaryButton({ children }) {
  return (
    <div className="SecondaryButton_Container">
      <h2>{children}</h2>
    </div>
  );
}

export default SecondaryButton;
