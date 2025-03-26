import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import "/src/App.css";

<MonacoEditor
  options={{ suggestOnTriggerCharacters: true, quickSuggestions: true }}
/>

const CodeEditor = () => {
  const [code, setCode] = useState("// Start coding...");
  const [theme, setTheme] = useState("vs-dark");
  const [language, setLanguage] = useState("javascript");

  return (
    <div className="editor-container">
      <h2>🔥 Online Code Editor</h2>

      <div>
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
        <option value="java">Java</option>
        <option value="C">C</option>
        <option value="C#">C#</option>
        
      </select>

      
    </div>

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
