export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100%",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <img
        src="https://picsum.photos/1920/1080"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
