import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import "./App.css";

<MonacoEditor
  options={{ suggestOnTriggerCharacters: true, quickSuggestions: true }}
/>

const CodeEditor = () => {
  const [code, setCode] = useState("// Start coding...");
  const [theme, setTheme] = useState("vs-dark");

  return (
    <div className="editor-container">
      <h2>🔥 Online Code Editor</h2>

      {/* Theme Toggle Button */}
      <button className="theme-toggle" onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}>
        {theme === "vs-dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Monaco Editor */}
      <MonacoEditor
        height="400px"
        width="100%"
        language="javascript"
        theme={theme}  
        value={code}
        onChange={(newCode) => setCode(newCode)}
      />
    </div>
  );
};

export default CodeEditor;
