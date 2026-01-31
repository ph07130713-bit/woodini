import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a1a12 100%)",
          color: "#ffffff",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 6, color: "#f5b55a" }}>
          MY DRAMA LAB
        </div>
        <div style={{ marginTop: 24 }}>선택형 숏드라마 MVP</div>
        <div style={{ marginTop: 16, fontSize: 28, color: "#c7c7c7" }}>
          7일 안에 검증하는 모바일 퍼스트 경험
        </div>
      </div>
    ),
    size
  );
}
