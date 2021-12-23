import useDogPicture from "../../api/ApiFetch";

const DogPicture = () => {
  const dogData = useDogPicture();
  if (dogData.error)
    return <div>Error: {dogData.error.message}, try again.......</div>;
  if (dogData.status === "loading") return <h1>Loading......</h1>;
  return (
    <div>
      <img
        style={{ maxWidth: "70%" }}
        src={dogData?.data?.data?.message}
        alt="dog"
      />
    </div>
  );
};

export default DogPicture;
