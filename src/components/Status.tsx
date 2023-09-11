type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = ({ status }: StatusProps) => {
  let message;

  if (status === "loading") {
    message = "Loading";
  } else if (status === "success") {
    message = "success";
  } else if (status === "error") {
    message = "Error";
  }
  return <h3>Status {message}</h3>;
};

export default Status;
