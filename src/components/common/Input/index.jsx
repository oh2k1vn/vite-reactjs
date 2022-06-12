import React from "react";

export default function Input({ title, value, onChange }) {
  return (
    <label>
      <span>{Title}</span>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
