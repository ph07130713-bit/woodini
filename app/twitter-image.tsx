import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
            "linear-gradient(135deg, #0a0a0a 0%, #1b1410 50%, #2a1a12 100%)",
          color: "#ffffff",
          fontSize: 56,
          fontWeight: 700,
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 5, color: "#f5b55a" }}>
          MY DRAMA LAB
        </div>
        <div style={{ marginTop: 24 }}>선택형 숏드라마 MVP</div>
        <div style={{ marginTop: 16, fontSize: 26, color: "#c7c7c7" }}>
          모바일 퍼스트 선택형 시리즈
        </div>
      </div>
    ),
    size
  );
}
