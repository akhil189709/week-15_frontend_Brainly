export function PostComponent({ image ,title ,subtitle,time,information }) {
  return (
    <div
      style={{
        width: 300,
        padding: 30,
        marginTop: 10,
        borderColor: "gray",
        borderRadius: 10,
        backgroundColor: "white",
      }}
    >
      <div style={{ display: "flex" }}>
        <img
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
          }}
          src={image}
          alt=""
        />
        <div style={{ marginLeft: 10 }}>
          <b>{title}</b>
          <div>{subtitle}</div>
          <div>{time}</div>
        </div>
      </div>
      <div>{information}</div>
    </div>
  );
}
