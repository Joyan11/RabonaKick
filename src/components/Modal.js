export const Modal = ({ modalContent }) => {
  return (
    <div className="snackbar">
      <p className="snackbar--message">{modalContent}</p>
    </div>
  );
};
