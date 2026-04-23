export default function Icon() {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        background:
          "linear-gradient(135deg, #2a2a2a 0%, #111111 60%, #080808 100%)",
      }}
    >
      <span
        style={{
          fontSize: 18,
          fontStyle: "italic",
          color: "#fff",
          letterSpacing: "-1px",
        }}
      >
        IoRi
      </span>

      <div
        style={{
          position: "absolute",
          bottom: 6,
          right: 6,
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: "#fff",
        }}
      />
    </div>
  );
}
